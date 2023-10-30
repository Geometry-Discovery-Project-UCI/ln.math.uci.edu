---
title: Linear Equations
---

A [*linear equation*]{.text-red-500} can be written as 
$$
a_1x_1+a_2x_2+\cdots+a_n x_n=b,
$$
where $a_1,\cdots,a_n$ and $b$ are real numbers known in advance.

<br/>

For example, $4x_1-5x_2+2=x_1$ is a linear equation, $\sqrt 2 x_1+\pi x_2=-1$ is also a linear equation, but $x_1=2x_2x_4$, and $x_2=2\sqrt{x_1}-6$ are not linear equations. 

<br/>

A [*system of linear equations*]{.text-red-500}  or a [*linear system*]{.text-red-500}
 is a collection of one or more linear equation involving the same variables $x_1,\cdots,x_n$. For example 


$$
\left\{
\begin{array}{l}
\color{red}{2x_1-x_2+1.5 x_3=8}\\
x_1-4x_3=-7
\end{array}
\right.
$$
is a linear system.

<br/>

A solution to a linear system is a list of numbers $(s_1,\cdots, s_n)$ that make each equation a true statement. The set of all possible solutions is called a  [*solution set*]{.text-red-500}.

<br/>

[**Geometric interpretation.**]{.text-cyan-500} As we have learned in analytic geometry, the solution of  a linear system in two variables can have 

1. exactly one solution (when two lines intersect at a unique point)
2. infinitely many solutions (two lines coincide)
3. no solution (two lines are parallel but not the same)

[**Matrix notations.**]{.text-cyan-500} Consider the linear system
$$
\begin{matrix}
x_1 & - &2x_2&+&x_3&=&0\\
&&2x_2&-&8x_3&=&8\\
5x_1&&&&-5x_3&=&10
\end{matrix}
$$
with the coefficients of each variables aligned in columns
$$
\begin{bmatrix}
1&-2&1\\
0&2&-8\\
5&0&-5
\end{bmatrix}.
$$
This is called the [*coefficient matrix*]{.text-red-500} (or [*matrix coefficients*]{.text-red-500}), and 
$$
\begin{bmatrix}
1&-2&1&0\\
0&2&-8&8\\
5&0&-5&10
\end{bmatrix}
$$
is called the  [*augmented matrix*]{.text-red-500}. 

<br/>

[**How to solve a linear system?**]{.text-red-500}

<br/>

**Example** Solve  the linear system
$$
\begin{matrix}
x_1&-&2x_2&+&x_3&=&0\\
&&2x_2&-&8x_3&=&8\\
5x_1&&&-&5x_3&=&10
\end{matrix}.
$$

<br/>

We copy the linear system below, with the right side the corresponding augmented matrix.
$$
\begin{matrix}
x_1&-&2x_2&+&x_3&=&0\\
&&2x_2&-&8x_3&=&8\\
5x_1&&&-&5x_3&=&10
\end{matrix}
\qquad \qquad
\begin{bmatrix}
1&-2&1&0\\
0&2&-8&8\\
5&0&-5&10
\end{bmatrix}
$$

<br/>


Using the Gauss elimination method, we  eliminate $5x_1$ in the third equation by multiplying $-5$ on the first equation then adding to the third
$$
\begin{matrix}
x_1&-&2x_2&+&x_3&=&0\\
&&2x_2&-&8x_3&=&8\\
&&10x_2&-&10x_3&=&10
\end{matrix}
\qquad \qquad
[\begin{bmatrix}
1&-2&1&0\\
0&2&-8&8\\
0&10&-10&10
\end{bmatrix}]
$$
Here we see that for each step of the elimination method we use for the linear system, we have the corresponding operation to the augmented matrix. Continuing the steps, we have 
$$
\begin{matrix}
x_1&-&2x_2&+&x_3&=&0\\
&&x_2&-&4x_3&=&4\\
&&10x_2&-&10x_3&=&10
\end{matrix}
\qquad \qquad
\violet{
\begin{bmatrix}
1&-2&1&0\\
0&1&-4&4\\
0&10&-10&10
\end{bmatrix}}
$$
and
$$
\begin{matrix}
x_1&-&2x_2&+&x_3&=&0\\
&&x_2&-&4x_3&=&4\\
&&&&30x_3&=&-30
\end{matrix}
\qquad \qquad
\violet{
\begin{bmatrix}
1&-2&1&0\\
0&1&-4&4\\
0&0&30&-30
\end{bmatrix}}
$$
and
$$
\begin{matrix}
x_1&-&2x_2&+&x_3&=&0\\
&&x_2&-&4x_3&=&4\\
&&&&x_3&=&-1
\end{matrix}
\qquad \qquad
\violet{
\begin{bmatrix}
1&-2&1&0\\
0&1&-4&4\\
0&0&1&-1
\end{bmatrix}}
$$
and
$$
\begin{matrix}
x_1&-&2x_2&&&=&1\\
&&x_2&&&=&0\\
&&&&x_3&=&-1
\end{matrix}
\qquad \qquad
\violet{
\begin{bmatrix}
1&-2&0&1\\
0&1&0&0\\
0&0&1&-1
\end{bmatrix}}
$$
and
$$
\begin{matrix}
x_1&&&&&=&1\\
&&x_2&&&=&0\\
&&&&x_3&=&-1
\end{matrix}
\qquad \qquad
\violet{
\begin{bmatrix}
1&0&0&1\\
0&1&0&0\\
0&0&1&-1
\end{bmatrix}}
$$
Thus, the solution of the linear system is $(x_1,x_2,x_3)=(1,0,-1)$.
 
<br/>

**Elementary row operations**


1.  [(Replacement)]{.text-green-500} Replace one row by the sum of itself and a multiple of another row.
2.  [(Interchange)]{.text-green-500} Interchange two rows.
3. [(Scaling)]{.text-green-500} Multiple all entries in a row by a non-zero constant.


<br/>
 

Two linear systems are [*equivalent*] , if one of them is obtained from the other by finitely many steps of row operations. 

<br/>


**Two fundamental questions of linear system: existence and uniqueness questions**
<br/>


1.  Does the solution exist ? \green{(Existence question)}
2. If a solution exists, is it the only one solution? that is, is the solution unique? \green{(Uniqueness question)}


<br/>



If a linear system doesn't have a solution, we call the system *inconsistent*,  otherwise, the system is called *consistent*}}*.   
<br/>

**Example** Determine if the following system is consistent.
$$
\begin{matrix}
x_1&-&2x_2&+&x_3&=& 0\\
&&2x_2&-&8x_3&=&8\\
5x_1&&&-&5x_3&=&10
\end{matrix}.
$$

**Answer** By the conclusion of the above example, the system is consistent, and the solution is unique. 

<br/>


**Example**
Determine if the following system is consistent.
$$
\begin{matrix}
&&x_2&-&4x_3&=&8\\
2x_1&-&3x_2&+&2x_3&=&1\\
4x_1&-&8x_2&+&12x_3&=&1
\end{matrix}.
$$

**Solutions** The augmented matrix is 
$$
    A=
\begin{bmatrix}
0&1&-4&8\\
2&-3&2&1\\
4&-8&12&1
\end{bmatrix}.
$$
<br/>

Using the elementary row operations, we obtain
$$
\begin{split}
&A\rightarrow
\begin{bmatrix}
0&1&-4&8\\
2&-3&2&1\\
4&-8&12&1
\end{bmatrix}
\rightarrow
\begin{bmatrix}
2&-3&2&1\\
0&1&-4&8\\
4&-8&12&1
\end{bmatrix}
\rightarrow
\begin{bmatrix}
2&-3&2&1\\
0&1&-4&8\\
0&-2&8&-1
\end{bmatrix}\to
\begin{bmatrix}
2&-3&2&1\\
0&1&-4&8\\
0&0&0&15
\end{bmatrix}.
\end{split}
$$

<br/>

The corresponding linear system becomes
$$
\begin{matrix}
2x_1&-&3x_2&+&2x_3&=&1\\
&&x_2&-&4x_3&=&8\\
&&&&\blue{0}&=&\blue{15}
\end{matrix}.
$$

<br/>

Since $0\neq 15$, the system is inconsistent.


<br/>

[As we can see, in order to determine whether a system is consistent, sometimes we don't have to completely solve it.]{.text-cyan-500}


If it has at least one solution, we call the linear system satisfies the \emph{\red {existence}} \index{existence} property; if it  has at most one solution, we call the linear system satisfies the \emph{\red{uniqueness}} \index{uniqueness}  property.

\ddnote{If a linear system satisfies the uniqueness property, then either it  has one solution, or it has no solution. }

The concepts of existence, uniqueness, consistency, and inconsistency can be elaborated by the following
table

     \begin{tabular}{llp{2cm}ll}
&&{$\ldelim\{{2}{2pt}[\green{Existence}]\rdelim.{2}{*}$} & \textcircled{1} infinitely many solutions & {$\rdelim\}{2}{2pt}[\green{Consistency}]\rdelim.{2}{*}$}\\
&   &  &  \textcircled{2} unique solution & \\
& {$\ldelim\{{-2}{2pt}[\green{Uniqueness}]\rdelim.{2}{*}$}   &   &\textcircled{3} no solutions & \green{\,\,\,\,Inconsistency}\\
     \end{tabular}


