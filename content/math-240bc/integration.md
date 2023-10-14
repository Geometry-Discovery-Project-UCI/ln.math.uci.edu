# Integration on manifold

In order to define integration on a general manifold,  we need to define a concept called ***[density]{.red}***, which is discussed, for example,  at  [Topics in Differential Geometry by Peter W. Michor](http://www.mat.univie.ac.at/~michor/dgbook.pdf). For the sake of simplicity, we shall only define the integration of top form over orientable manifold. 

Let $M$ be a manifold. 
It  is called orientable, if there is a cover $\{U_j\}$ on $M$ such that if $(x_j^1,\cdots,x_j^n)$  is a coordinate system  on $U_j$, then we have
$$
\det\frac{\pa (x_j^1,\cdots,x_j^n)}{\pa(x_i^1,\cdots,x_i^n)}>0
$$
for any $U_i\cap U_j\neq\emptyset$. Such a set of coordinate charts is called an orientation of the manifold.
\spc
::Theorem
A manifold is orientable if and only if there is an $n$-form on it which is nowhere zero. 
::
 

## Proof
Let $\omega$ be a nowhere zero  $n$-form. Let $\{U_i\}_I$ be a cover of the manifold $M$. Assume that $(x_i^1,\cdots, x_i^n)$ be a coordinate system on $U_i$. Without loss of generality, we assume  $dx_i^1\wedge\cdots\wedge dx_i^n/\omega=f_i$ is a positive function\footnote{otherwise, we can exchange $x_i^1$ with $x_i^2$.}. Then 
$$
\det\frac{\pa (x_j^1,\cdots,x_j^n)}{\pa(x_i^1,\cdots,x_i^n)}=\frac{f_i}{f_j}>0.
$$
Conversely, if $M$ is orientable, then we define
$$
\omega=\sum_i \rho_i\,dx_i^1\wedge\cdots\wedge dx_i^n.
$$
Let $x\in U_i$. Then we can rewrite 
$$
\omega=\sum_i \rho_i
\det\frac{\pa (x_i^1,\cdots,x_i^n)}{\pa(x_j^1,\cdots,x_j^n)}\,dx_j^1\wedge\cdots\wedge dx_j^n.
$$
Since the function 
$$
\sum_i \rho_i
\det\frac{\pa (x_i^1,\cdots,x_i^n)}{\pa(x_j^1,\cdots,x_j^n)}>0,
$$
we prove the conclusion.
 
\begin{exercise} If $M$ is an orientable manifold with boundary, prove that $\pa M$ is also an orientable manifold.
\end{exercise}

