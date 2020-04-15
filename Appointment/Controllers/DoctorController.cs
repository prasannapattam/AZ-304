using Appointment.Models;
using Appointment.Services;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace Doctor.Controllers
{
    [ApiController]
    [Route("{controller}/{action}")]
    public class DoctorController : ControllerBase
    {
        private readonly DoctorService service;

        public DoctorController(DoctorService service)
        {
            this.service = service;
        }

        public string Index()
        {
            return "Doctor Service";            
        }

        [HttpPost]
        public List<DoctorModel> GetAll() =>
            service.Get();

        [HttpPost]
        public DoctorModel Get(string id) => service.Get(id);

        [HttpPost]
        public List<DoctorModel> Add(DoctorModel model)
        {
            service.Create(model); 
            return GetAll();
        }

        [HttpPost]
        public List<DoctorModel> Update(DoctorModel model)
        {
            service.Update(model.Id, model);
            return GetAll();
        }

        [HttpPost]
        public List<DoctorModel> Delete(DoctorModel model)
        {
            service.Remove(model.Id);
            return GetAll();
        }

        [HttpPost]
        public List<DoctorModel> Initialize()
        {
            service.Initialize();
            return GetAll();
        }
    }
}