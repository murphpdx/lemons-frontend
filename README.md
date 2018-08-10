# CDK Global Hackathon 2018 - Lemonade frontend

Lemonade is an application that provides information about car recalls.
The frontend is a react application that makes calls to our backend which then
proxies requests to the Department of Transportation's recall api. The search 
page automatically populates make based on year and model based on make. This 
information also comes from the backend and DOT. 

The application can be used by dealerships in several ways. The parts department 
can use it to check for recalls and preform repairs. Sales can use the application
to show that a manufacturer has produced a solid vehicle or use it to help determine 
trade in value. Eventually, the application can provide information about the 
number of recalls a specific manufacturer has had over the years. This information can
be used help make decisions about purchasing a new car.

## Running locally:

You will need the Allow-Control-Allow-Origin pluggin on
your browser in order to hit the backend.

You can run the application locally by running the following commands:

```npm install```

```npm run start```


## Related Projects:

 - [backend](https://github.com/murphpdx/lemons-backend)
 - [Router](https://github.com/bnima/lemon-zuul)
