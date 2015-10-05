using System.Web;
using System.Web.Optimization;

namespace ContactFormAngular
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/sitescripts").Include(
                "~/Scripts/lib/jquery/jquery-{version}.js",
                "~/Scripts/lib/angular/angular.js",
                "~/Scripts/lib/bootstrap/bootstrap.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                "~/Scripts/lib/jquery/validate/jquery.validate*"));

            bundles.Add(new ScriptBundle("~/bundles/app").Include(
                "~/Scripts/app.js"));

            bundles.Add(new ScriptBundle("~/bundles/contact").Include(
                "~/Scripts/app.js",
                "~/Scripts/lib/jquery/validate/jquery.validate*"));


            bundles.Add(new StyleBundle("~/Styles/css").Include(
                "~/Styles/bootstrap.css",
                "~/Styles/app.css"));

            //BundleTable.EnableOptimizations = true;
        }
    }
}
