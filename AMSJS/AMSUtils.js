
var UTILS_STARTUP_FRAME       = 'Startup';


function UTILS_GetMainStartupPage()
{
   var loTopWindow;

   if (top.window.name.indexOf( 'ADV' ) == 0 )
   {
      return top.frames[UTILS_STARTUP_FRAME];
   }
   else
   {
      loTopWindow = top.window.opener;
      if (loTopWindow == null)
      {
         return null;
      }

      try
      {
         var loParentHref = loTopWindow.location.href;




      }
      catch ( exp )
      {
         return null;
      }

      if (loTopWindow.top.window.closed)
      {
         return null;
      }

      while (true)
      {
         try
         {
            if (loTopWindow.top.window.name.indexOf( 'ADV' ) == 0 )
            {
               return loTopWindow.top.frames[UTILS_STARTUP_FRAME];
            }
            else
            {
               loTopWindow = loTopWindow.top.window.opener;

               if (loTopWindow == null || loTopWindow == loTopWindow.top.window)
               {
                  return null;
               }
            }
         }
         catch ( exp )
         {
            return null;
         }
      }
   }

   return null;
}
