using System.Text.Json.Serialization;

namespace WebApiLandingPage3.Enum
{
    [JsonConverter(typeof(JsonStringEnumConverter))]
    public enum InteresseEnum
    {
        Apartamentos,
        Casas,
        Jardins,
        Outros
    }
}