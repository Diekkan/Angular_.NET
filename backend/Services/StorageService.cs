using backend;

namespace backend.Services;

public interface IStorageService
{
    public Task? Store(Task task);
    public Task? GetTask(int id);
    public List<Task> GetTasks();
}

public class StorageService : IStorageService
{
    public List<Task> Tasks = new();

    public Task? Store(Task task)
    {
        try
        {
            task.Id = Tasks.Count + 1;
            Tasks.Add(task);
            return task;
        }
        catch
        {
            return null;
        }
    }
    public Task? GetTask(int id)
    {
        try
        {
            return Tasks[id];
        }
        catch
        {
            return null;
        }
    }

    public List<Task> GetTasks()
    {
        return Tasks;
    }

}
