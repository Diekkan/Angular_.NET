using backend;

namespace backend.Services;

public interface ITaskService
{
    public Response<Task> GetTask(int id);
    public Response<Task> GetTasks();
    public Response<Task> NewTask(Task task);
}

public class TaskService : ITaskService
{

    private readonly IStorageService _storage;

    public TaskService(IStorageService storage)
    {
        _storage = storage;
    }

    public Response<Task> GetTask(int id)
    {
        Response<Task> Response = new();
        List<Task> TaskList = new();

        Task? Task = _storage.GetTask(id);

        if (Task == null)
        {
            Response.Msg = "Task not found";
            Response.StatusCode = 404;
            Response.Data = TaskList;
        }
        else
        {
            TaskList.Add(Task);
            Response.Msg = "Task found";
            Response.StatusCode = 200;
            Response.Data = TaskList;
        }

        return Response;

    }

    public Response<Task> GetTasks()
    {
        List<Task> TaskList = _storage.GetTasks();
        Response<Task> Response = new()
        {
            Msg = "Tasks found",
            StatusCode = 200,
            Data = TaskList
        };

        return Response;
    }

    public Response<Task> NewTask(Task task)
    {
        Response<Task> Response = new();
        List<Task> TaskList = new();

        try
        {
            if (string.IsNullOrEmpty(task.Description)
                || task.Description.Length > 100)
            {
                Response.Msg = "Description shouldn't be empty and max 100 chars long";
                Response.StatusCode = 400;
                Response.Data = TaskList;
                return Response;
            }

            Task? Task = _storage.Store(task);

            if (Task == null)
            {
                Response.Msg = "Task not valid";
                Response.StatusCode = 400;
                Response.Data = TaskList;
            }
            else
            {
                TaskList.Add(Task);
                Response.Msg = "Task succesfully stored";
                Response.StatusCode = 200;
                Response.Data = TaskList;
            }

            return Response;

        }
        catch (Exception e)
        {
            Response.Msg = e.Message;
            Response.StatusCode = 500;
            Response.Data = TaskList;
            return Response;
        }

    }

}
