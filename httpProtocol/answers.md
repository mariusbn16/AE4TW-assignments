# Assignment n°1 - HTTP Protocol
## Task 1

A. Json data

B. At the end of the url

C. Not on the computer terminal but with some tool like in Visual Studio Code, yes

## Task 2

D. 200 mean OK, it's the succesful status code

E. It's part of the success category of the status codes

F. I think that the most famous one that everyone knows is the 404 and it means Not Found. I also know 408 : request timeout, 500 : Internal server error or 204 : No content 

## Task 3

G. It would render the json text as a webpage wich means it would show a single unformatted string of text

H. The content length is 292, wich represents the number of bytes in the body. We can count the number of characters to verify this number but since all the data is display and not cut off, we can assume that this number is correct

I. The connection is important for performance and ressource management

## Task 4

J. I receive a 404 status code wich mean : Not found

K. There is no response body except the {} because there is no data that match the request

L. Multiple thing differs from the succesful case : status code 404 instead of 200, content length is only 2, cache status : expired

## Task 5

M. The status code receive is 201

N. This status code means that the request was succesfully fulfilled and resulted in one new ressource being created

O. We have a nex header : location. It provides the url of the newly created ressource. The cache control header indicate that there is no cache with a POST request. The cf-cache-status indicate Dynamic instead of HIT because post requests are dynamic operations

## Task 6

P. No, it does not. 

Q. If we provide an invalide token to a real secure API, the server would return the status code 401, wich means unauthorized

R. 401 and 403 status code both indicate failure to access a ressource but they represent different stages of the security process. 401 is when the server doesn't know who you are and 403 know who you are but you do not have permission to access the ressource

## Task 7

S. A HEAD request is useful whenever you need information about a resource without the overhead of downloading the actual content

T. Monitoring systems might prefer this approach for efficency reasons

## Task 8
