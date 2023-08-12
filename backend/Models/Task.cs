using System.ComponentModel.DataAnnotations;

namespace backend;


public class Task
{
    public int Id { get; set; }

    [Required(ErrorMessage = "Description field is required.")]
    public string Description { get; set; }

    [Required(ErrorMessage = "IsCompleted field is required.")]
    public bool IsCompleted { get; set; }
    public Task(int id, string description, bool isCompleted)
    {
        Id = id;
        Description = description;
        IsCompleted = isCompleted;
    }

}
