import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
// i want to tell clerk what routes are protected using the matcher
const isProtectedRoute = createRouteMatcher(
    //(.*) means it will also include any dynamic routes, like [id] folders and their pages.
    ["/dashboard(.*)"]
)

//to define public and protected routes 
export default clerkMiddleware((auth, req) => {
        if(isProtectedRoute(req)) auth().protect();
})

//the matcher is find a correlation between your routes and the routes you specified in the clerkMiddleware()


//the matcher is written using regex
//regular expressions are used to find matches in patterns


export const config = {
    //find matches where the route starts with / and don't filter anything that comes after. Find all matches.

    //!DON'T CHANGE THIS LINE
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
