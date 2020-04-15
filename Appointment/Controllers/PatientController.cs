using Appointment.Models;
using Appointment.Services;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace Patient.Controllers
{
    [ApiController]
    [Route("{controller}/{action}")]
    public class PatientController : ControllerBase
    {
        private readonly PatientService service;

        public PatientController(PatientService service)
        {
            this.service = service;
        }

        public string Index()
        {
            return "Patient Service";
        }

        [HttpPost]
        public List<PatientModel> GetAll() =>
            service.Get();

        [HttpPost]
        public PatientModel Get(string id) => service.Get(id);

        [HttpPost]
        public List<PatientModel> Add(PatientModel model)
        {
            service.Create(model);
            return GetAll();
        }

        [HttpPost]
        public List<PatientModel> Update(PatientModel model)
        {
            service.Update(model.Id, model);
            return GetAll();
        }

        [HttpPost]
        public List<PatientModel> Delete(PatientModel model)
        {
            service.Remove(model.Id);
            return GetAll();
        }

        [HttpPost]
        public List<PatientModel> Initialize()
        {
            service.Initialize();
            return GetAll();
        }
    }
}