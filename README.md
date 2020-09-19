# kochSnowflake

Fractal snowflake based on Koch construction.
Starting with an "initiator" of a triangle each line of the traingle is replaced with a "generator."
Generator shape in this example creates an equilateral triangle at middle third of line segment but deletes section that would overlap.  Creating a shape 
like:  "__/\\__"
Each generation replaces each existing line with the generator shape.  

Intially there will be an equalateral triangle.  Each mouse click with make the next generation of the snowflake.

Design is described in The Algorithmic Beauty Of Plants  by Przemyslaw Prusinkiewicz and Aristid Lindenmayer.
link to PDF of book: 
http://algorithmicbotany.org/papers/abop/abop.pdf

Inspiration for this and code sample based on is from Coding Train:
https://youtu.be/X8bXDKqMsXE
and
https://youtu.be/_BOtJncHCVA
