// Without a defined matcher, this one line adds next-auth to the entire project
export { default } from "next-auth/middleware";

//Applies next-auth only to matching routes - can be Regex. Ref: https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
export const config = { matcher: ["/extra", "/dashboard"] };
