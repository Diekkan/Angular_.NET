namespace backend;


public class Response<T>
{
    public int StatusCode { get; set; }
    public string? Msg { get; set; }
    public List<T> Data{ get; set; } = new List<T>();

    public Response(int code, string msg, List<T> list)
    {
        StatusCode = code;
        Msg = msg;
        Data= list;
    }

    public Response()
    {
    }
}
