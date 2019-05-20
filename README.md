# cuddly-goggles
Authentication and Multi Tenancy along with subscription in MongoDB and nodejs
![Schema](./cuddly-goggles-schema.svg)


### Requirements 
- Should be able to hook up to firebase auth 
- Subscription using Stripe
- Integration to nodemailer/queues
- Webhooks and Events on each process

### APIs 
- `/auth/register` 
- `/auth/reset-password`
- `/auth/forgot-password`
- `/auth/forgot-password/:token`
- (2FA probably in the long future)
- `/projects/:projectid/users`
- `/projects/:projectid/edit`
- `/projects/:projects/token`
- `/projects/:projectid/delete`
- `/projects/create`
- `/projects/update`
- `/teams/:teamid/users`
- `/teams/create`
- `/teams/:teamid/edit`
- `/teams/:teamid/token`
- `/teams/:teamid/delete`
- `/teams/:teamid`
- `/subscription/create`
- `/subscription/update-details`
- `/subscription/cancel`
- `/subscription/change-plan`
- `/subscription/customer/:userid`
- `/subscription/customer/:userid/billing-history`


### Middleware Features
- to check if the user is subscribed or not 
- to check if the user has reached the limit of the plan that he is on 
- to check if the users subscription has expired or not (in case of trial)
- to check if the user has permissions to access/operate the particular feature
