using System;

namespace Appointment.Models
{
    public class AppointmentModel: IMongoModel
    {
        public PatientModel Patient { get; set; }
        public DoctorModel Doctor { get; set; }
        public DateTime AppointmentDate { get; set; }
    }
}
