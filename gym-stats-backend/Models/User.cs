using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

public class User
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string id { get; set; }


    public string email { get; set; } // optional
    public string role { get; set; }
    public string password { get; set; }
}