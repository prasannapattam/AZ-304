using Appointment.Models;
using Appointment.Services;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace Appointment.Controllers
{
    [ApiController]
    [Route("{controller}/{action}")]
    public class AppointmentController : ControllerBase
    {
        private readonly AppointmentService service;

        public AppointmentController(AppointmentService service)
        {
            this.service = service;
        }

        public string Index()
        {
            return "Appointment Service";
        }

        [HttpPost]
        public List<AppointmentModel> GetAll() =>
            service.Get();

        [HttpPost]
        public AppointmentViewModel GetViewModel() =>
            service.GetViewModel();

        [HttpPost]
        public AppointmentModel Get(string id) => service.Get(id);

        [HttpPost]
        public List<AppointmentModel> Add(AppointmentModel model)
        {
            service.Create(model);
            return GetAll();
        }

        [HttpPost]
        public List<AppointmentModel> Update(AppointmentModel model)
        {
            service.Update(model.Id, model);
            return GetAll();
        }

        [HttpPost]
        public List<AppointmentModel> Delete(AppointmentModel model)
        {
            service.Remove(model.Id);
            return GetAll();
        }

        [HttpPost]
        public AppointmentViewModel Initialize()
        {
            service.Initialize();
            return GetViewModel();
        }
    }
}
