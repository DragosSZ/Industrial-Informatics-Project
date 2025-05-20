using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

public class Stat
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string Id { get; set; }

    public string TraineeId { get; set; }
    public DateTime Date { get; set; }
    public float Weight { get; set; }
    public float Height { get; set; }
}