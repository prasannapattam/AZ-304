using Appointment.Models;
using System.Collections.Generic;

namespace Appointment.Services
{
    public static class Database
    {
        public static List<DoctorModel> Doctors = new List<DoctorModel>();
        public static List<PatientModel> Patients = new List<PatientModel>();
        public static List<AppointmentModel> Appointments = new List<AppointmentModel>();

        public static IList<TModel> GetCollection<TModel>()
            where TModel: IMongoModel
        {
            if (typeof(TModel) == typeof(DoctorModel))
                return (IList<TModel>)Doctors;
            else if (typeof(TModel) == typeof(PatientModel))
                return (IList<TModel>)Patients;
            else if (typeof(TModel) == typeof(AppointmentModel))
                return (IList<TModel>)Appointments;
            else
                return null;
        }
    }
}
