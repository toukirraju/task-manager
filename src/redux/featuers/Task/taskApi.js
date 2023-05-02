import { apiSlice } from "../../api/apiSlice";

export const taskApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTasks: builder.query({
      query: () => "/tasks",
    }),
    getSingleTask: builder.query({
      query: (id) => `/tasks/${id}`,
    }),
    addTask: builder.mutation({
      query: (data) => ({
        url: "/tasks",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(args, { queryFulfilled, dispatch }) {
        const { data } = await queryFulfilled;

        //update tasks cache pessimistically start
        dispatch(
          apiSlice.util.updateQueryData("getTasks", undefined, (draft) => {
            return [...draft, data];
          })
        );
        //update tasks cache pessimistically end
      },
    }),
    taskStatusUpdate: builder.mutation({
      query: (data) => ({
        url: `/tasks/${data.id}`,
        method: "PATCH",
        body: data,
      }),
      async onQueryStarted(args, { queryFulfilled, dispatch }) {
        // optimistic cache update start
        const patchResult = dispatch(
          apiSlice.util.updateQueryData("getTasks", undefined, (draft) => {
            const draftTask = draft.find((t) => t.id == args.id);

            draftTask.status = args.status;
          })
        );
        // optimistic cache update end

        try {
          const { data } = await queryFulfilled;
          if (data?.id) {
            dispatch(taskApi.endpoints.getTasks.initiate());
          }
        } catch (error) {
          patchResult.undo();
        }
      },
    }),

    editTask: builder.mutation({
      query: (data) => ({
        url: `/tasks/${data.id}`,
        method: "PATCH",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        const { data: editedTask } = await queryFulfilled;

        //Edite tasks cache pessimistically start
        if (editedTask) {
          dispatch(
            apiSlice.util.updateQueryData("getTasks", undefined, (draft) => {
              const newArray = draft.map((item) => {
                if (item.id == arg.id) {
                  return {
                    ...editedTask,
                  };
                }
                return item;
              });
              return newArray;
            })
          );
        }
        //Edite tasks cache pessimistically end
      },
    }),

    taskRemove: builder.mutation({
      query: (id) => ({
        url: `/tasks/${id}`,
        method: "DELETE",
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        const deletionComplete = await queryFulfilled;

        //Delete tasks cache pessimistically start
        if (deletionComplete) {
          dispatch(
            apiSlice.util.updateQueryData("getTasks", undefined, (draft) => {
              const updatedTasks = draft.filter((item) => item.id != arg);
              return updatedTasks;
            })
          );
        }
        //Delete tasks cache pessimistically end
      },
    }),
  }),
});

export const {
  useGetTasksQuery,
  useGetSingleTaskQuery,
  useAddTaskMutation,
  useTaskStatusUpdateMutation,
  useEditTaskMutation,
  useTaskRemoveMutation,
} = taskApi;
