using backend.Services;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers;

[ApiController]
[Route("/api/tasks/")]
public class TaskController : ControllerBase
{
    private readonly ITaskService _taskService;

    public TaskController(ITaskService taskService)
    {
        _taskService = taskService;
    }


    [HttpGet]
    public Response<Task> GetTasks()
    {
        return _taskService.GetTasks();
    }

    [HttpGet("{id}")]
    public Response<Task> GetTask(int id)
    {
        return _taskService.GetTask(id);
    }

    [HttpPost]
    public Response<Task> NewTask([FromBody] Task task)
    {
        return _taskService.NewTask(task);
    }
}
