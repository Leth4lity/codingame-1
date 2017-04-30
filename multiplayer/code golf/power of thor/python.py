x,y,X,Y=[int(i)for i in raw_input().split()]
while 1:
 a=input();d=''
 if Y<y:d="S";Y+=1
 if X>x:d+="W";X-=1
 if X<x:d+="E";X+=1
 print d