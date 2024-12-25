# MIDDLEWARE -> is function which is performing a work
Request-->Middleware-->Response

in Express = Middleware in express are functions that come into play after the server receives the request and before the response is sent to the client.

**commonn middleware functions** :
-methodOverride
-bodyParser
express.static  - built in middleware
express.urlencoded  - " " " "
 

**app.use(..middleware..)** -> using use mtlb ki sara request(all routes) ka liya ya middleware run kro i.e the funct is executed every time when the app receives the request

What do middlewared do ?
- Execute any code
- Make changes to the request and the response objects.
- End the request response cycle ( dekho req res cycle tbhi end hoti ha jb ko response chla jay i.e koi route pa req aya and than res send krka hum req-res cycle ko end kr skta ha but by using middleware hum bina route sa res send kiya end kr skta ha cycle ko middleware sa response send kr ka us route pa)
- call the next middleware function in the stack (nesting(chaining) kr skta ha ak middleware sa dusramiddleware fun ko cal ...)

# Using next 
The next middleware function is denoted by variable next
if the current middleware function does not end the req-res cycle , it must call next() to pass constro; to the next middlewre functions

# priority matter krta hai middleware likhta sma ki tum kha pa likha ho :
agr tumna random path ka lia middleware likha hai but app.get req wala random path ka code tumna upr likha hai or uska bad middleware likha ha than tumhara middleware will not get called kyuki upr wala get request ka liya response dedega and req-res cycle end krdega 





# Error Handling
express ka 