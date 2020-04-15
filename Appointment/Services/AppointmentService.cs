using Appointment.Models;
using System.Collections.Generic;

namespace Appointment.Services
{
    public class AppointmentService: DataService<AppointmentModel>
    {
        private readonly List<DoctorModel> doctorCollection;
        private readonly List<PatientModel> patientCollection;

        public AppointmentService() : base()
        {
            doctorCollection = Database.Doctors;
            patientCollection = Database.Patients;
        }

        public AppointmentViewModel GetViewModel()
        {
            return new AppointmentViewModel()
            {
                Appointments = Get(),
                Doctors = GetDoctors(),
                Patients = GetPatients()
            };
        }

        public List<DoctorModel> GetDoctors() =>
            doctorCollection.FindAll(m => true);

        public List<PatientModel> GetPatients() =>
            patientCollection.FindAll(m => true);

        public void Initialize()
        {
            new DoctorService().Initialize();
            new PatientService().Initialize();
        }
    }
}
