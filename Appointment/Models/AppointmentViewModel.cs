using System.Collections.Generic;

namespace Appointment.Models
{
    public class AppointmentViewModel
    {
        public List<AppointmentModel> Appointments { get; set; }
        public List<DoctorModel> Doctors { get; set; }
        public List<PatientModel> Patients { get; set; }
    }
}
