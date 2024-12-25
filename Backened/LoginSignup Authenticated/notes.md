create use account:
    moongose setup
    schema setup
    model setup
    usecreate -> password -> hash
    jwt token ->ko cookie ma bejaga

    login krta hi  -> token server ka pas chla jayga attch hoka -> decrpt hoga jwt token and payload miljaya -> email mil jayga



# why jwt token:     
jwt token islia use krta hai taki bar bar apna profile page pa kuch data access krna ka liya bar bar login na manga jay user sa 
token set krna ka bad wo token hmesa attched rhaga(in cookies) and kuch bhi data acces krta sma server ko automatically token beja jayga ya btana ka lia ki ya authenticated user ha 
cookies ka nadr token tbtk stored rhaga jbtk user logined hai , jasa hi use logout kraga (i.e logout route pa jayga )token = empty hojayga cookies ma

**In English**
JWT token is used to avoid repeatedly asking the user to log in when accessing protected routes or pages (like a profile page).
Once the token is set, it stays attached (usually stored in cookies or local storage) and is sent with each request to the server.
This helps the server identify and verify that the user is authenticated.

The token remains stored in cookies until the user logs out.
When the user logs out (e.g., by visiting a logout route), the token is cleared or set to empty in the cookies.
