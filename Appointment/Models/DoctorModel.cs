namespace Appointment.Models
{
    public class DoctorModel: IMongoModel
    {
        public string Name { get; set; }

        public string Speciality { get; set; }
    }
}
