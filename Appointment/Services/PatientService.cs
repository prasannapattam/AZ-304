using Appointment.Models;

namespace Appointment.Services
{
    public class PatientService: DataService<PatientModel>
    {
        public void Initialize()
        {
            base.RemoveAll();
            base.Create(new PatientModel() { Id = "5e2984378b793f29cc30f1b4", Name = "Ninja", Phone = "1234567890" });
        }
    }
}

