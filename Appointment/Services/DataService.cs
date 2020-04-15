using Appointment.Models;
using System.Collections.Generic;

namespace Appointment.Services
{
    public class DataService<TModel>
        where TModel: IMongoModel
    {
        protected List<TModel> collection;

        public DataService()
        {
            collection = (List<TModel> ) Database.GetCollection<TModel>();
        }

        public List<TModel> Get() => collection;

        public TModel Get(string id) => collection.Find(m => m.Id == id);

        public TModel Create(TModel model)
        {
            collection.Add(model);
            return model;
        }

        public void Update(string id, TModel model) =>
            collection[collection.FindIndex(m => m.Id == id)] =  model;

        public void Remove(TModel model) =>
            collection.Remove(model);

        public void Remove(string id) =>
            collection.RemoveAll(m => m.Id == id);

        public void RemoveAll() =>
            collection.RemoveAll(m => true);
    }
}
