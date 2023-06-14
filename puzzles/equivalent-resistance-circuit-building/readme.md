# Goal 🎯 :

Calculate the equivalent resistance of a circuit containing only resistors.



A resistor is a component used in electrical circuits. A resistor is quantified by its Resistance, which is measured in Ohms. We are interested in knowing the total resistance of a circuit of only resistors. There are two key definitions needed to determine the resistance of multiple resistors. 



1. Series



The resistance of resistors in a line is equivalent to the sum of the resistance of those resistors.




```
    ---[R_1]---[R_2]---
```


Resistors in series will be noted with parentheses ( R_1 R_2 R_3 ... and so on ).



The resistance of a series arrangement is: R_eq = R_1 + R_2 + R_3 + ... and so on, where R_eq is the equivalent resistance of the series arrangement.



2. Parallel



The resistance of resistors in branching paths of the circuit is equal to 1 over the sum of 1 over the resistance of each branching path.




```
       +---[R_1]---+

       |           |

    ---+           +---

       |           |

       +---[R_2]---+


```




Resistors in parallel will be noted with brackets [ R_1 R_2 R_3 ... and so on ].



The resistance of resistors in parallel is R_eq = 1/(1/R_1 + 1/R_2 + 1/R_3 + 1/... and so on). 



A branch can be treated as a single resistor by determining its equivalent resistance.



Example:



`N` = 3


```
A 24

B 8

C 48

[ ( A B ) [ C A ] ]
```


This will look something like this:




```
       +---[C]---+

       |         |

    +--+         +--+

    |  |         |  |

    |  +---[A]---+  |

    |               |

    +---[A]---[B]---+

    |               |

    +---[Battery]---+
```


[ **( A B )** **[ C A ]** ] =&gt; [ **24+8** **1/(1/48+1/24)** ] =&gt; [ **32** **16** ] =&gt; **1/(1/32+1/16)** =&gt; **32/3** =&gt; **10.666...** =&gt; **10.7**

## Input 📥 :

Line 1: An integer `N` for the number of unique resistors present in the circuit

Next `N` lines: A space separated `name` and the integer resistance `R` of a resistor

Last line: A space separated combination of parentheses, brackets, and names of resistors

## Output 📤 :

The equivalent resistance expressed as a float rounded to the nearest 0.1 Ohms.

##  Constraints 📏 :

0 &lt; `N` &lt; 10

0 &lt; `R` &lt; 100

### Inputs 📥 :


```
2
A 20
B 10
( A B )
```


### Outputs 📤 :


```
30.0
```
