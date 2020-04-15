namespace Appointment.Models
{
    public class PatientModel: IMongoModel
    {
        public string Name { get; set; }

        public string Phone { get; set; }
    }
}
