using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ContactFormAngular.Controllers
{
    public class ContactController : Controller
    {
        [HttpGet]
        public ActionResult Index()
        {
            var contactForm = new Models.ContactFormAngular();
            return View();
        }

        [HttpPost]
        public ActionResult Index(Models.ContactFormAngular contactForm)
        {
            if (ModelState.IsValid)
            {
                // TODO: massage data
                return View("ThankYou", contactForm);
            }

            return View(contactForm);
        }

        [HttpPost]
        public ActionResult JSON(Models.ContactFormAngular contactForm)
        {
            if (ModelState.IsValid)
            {
                return Json( new { success = true, name = contactForm.Name });
            }
            return Json(new { Response });
        }
    }
}