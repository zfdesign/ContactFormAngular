﻿using System.ComponentModel.DataAnnotations;

namespace ContactFormAngular.Models
{
    public class ContactFormAngular
    {
        [Display(Name = "Email address")]
        [Required(ErrorMessage = "Name is requred")]
        [RegularExpression("[A-Za-z]+[A-Za-z ]{4,150}", ErrorMessage = "Name must be at least 5 character long and to begin with a letter")]
        //[MinLength(5, ErrorMessage = "Name must be at least 5 characters long")]
        //[MaxLength(150, ErrorMessage = "Name must cannot be more than 150 characters long")]
        public string Name { get; set; }

        [Display(Name = "Email address")]
        [Required(ErrorMessage = "Email address is required")]
        [EmailAddress(ErrorMessage = "Invalid Email Address")]
        public string Email { get; set; }

        public string Comment { get; set; }
    }
}