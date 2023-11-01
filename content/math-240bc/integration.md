---
title: Integration on manifold
---

In order to define integration on a general manifold,  we need to define a concept called ***[density]{.red}***, which is discussed, for example,  at  [Topics in Differential Geometry by Peter W. Michor](http://www.mat.univie.ac.at/~michor/dgbook.pdf). For the sake of simplicity, we shall only define the integration of top form over orientable manifold. 

Let $M$ be a manifold. 
It  is called orientable, if there is a cover $\{U_j\}$ on $M$ such that if $(x_j^1,\cdots,x_j^n)$  is a coordinate system  on $U_j$, then we have
$$
\det\frac{\pa (x_j^1,\cdots,x_j^n)}{\pa(x_i^1,\cdots,x_i^n)}>0
$$
for any $U_i\cap U_j\neq\emptyset$. Such a set of coordinate charts is called an orientation of the manifold.

<br>

::Theorem{tag="thm1"}
A manifold is orientable if and only if there is an $n$-form on it which is nowhere zero. 
::

## Proof.
Let $\omega$ be a nowhere zero  $n$-form. Let $\{U_i\}_I$ be a cover of the manifold $M$. Assume that $(x_i^1,\cdots, x_i^n)$ be a coordinate system on $U_i$. Without loss of generality, we assume  $dx_i^1\wedge\cdots\wedge dx_i^n/\omega=f_i$ is a positive function (otherwise, we can exchange $x_i^1$ with $x_i^2$). Then 
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
 
 <br>

::Exercise
If $M$ is an orientable manifold with boundary, prove that $\pa M$ is also an orientable manifold.
::



## Proof.
Let $\{U_j\}_J$ be a locally finite cover of $\pa M$ and let $\psi_j$ are functions on $U_j$ defining the boundary $\pa M$, that is 
$$
\{\psi_j=0\}=\pa M\cap U_j,\qquad d\psi_j\neq 0
$$
for all $j\in J$. Using the partition of unity $\{\psi_j\}$ above, we let
$$
\psi=\sum_j\rho_j\psi_j.
$$
which is a function defined on a tubular neighborhood of $\pa M$. The function $\psi$ is called a global defining function in the sense that 
$$
\{\psi=0\}=\pa M,\qquad d\psi\neq 0.
$$
Let $\omega$ be a nowhere zero $n$-form of $M$. Let
$v$ be the dual vector field of the one form $d\psi$. Since $d\psi\neq 0$, we have $v\neq 0$. Thus
$\iota_{v}(\omega)$
would be a nowhere zero $(n-1)$-from on $\pa M$. Thus $\pa M$ is oriented. 

<br>

::Remark
The converse is not true. For example,   M\"obius Band is not orientable but its boundary, which is homeomorphic to 
$S^1$, is orientable. 
::



Let $M$ be an orientable $n$-dimensional manifold and let $\omega$ be an $n$-form on $M$ with compact support. The integration of $\omega$ over $M$ can be defined in the following way.

Let $\{ U_j\}$ be a locally finite  cover \footnote{that is, for each point in the space has a neighbourhood that intersects only finitely many of the sets in the collection.} of $M$ and let $\{\rho_j\}$ be the partition of unity subordinate to the cover, that is, $\{\rho_i\}$ are smooth functions such that


1.  $\rho_j\geq 0$;
2. ${\rm supp}\,\rho_i\subset U_j$ for all $j$;
3.  $\sum _j\rho_j=1$.
 



Then we can define
$$
\int_M\omega=\sum_j\int_{U_j}\rho_j\omega,
$$
where the right hand side is a sum of integrations on Euclidean space, hence well defined.

 

::Exercise
Prove that  the definition of integral is independent to the choices of cover and the partition of unity.
::

The definition of integration can be generalized to manifold with boundary. A manifold with boundary  is a topological space such that

1. It  can be covered by  $\{U_j\}$, where $U_j$ is either the unit ball of $\mathbb R^n$, or the upper half of the unit ball of $\mathbb R^n$ defined by
$$
\{(x_1,\cdots,x_n)\mid\sum x_i^2<1,x_n\geq 0\}.
$$

2. The transition functions are smooth (up to the boundary).
 

 

Let $M$ be a manifold with boundary. Let $\pa M$ be the boundary of $M$. Then we have

1. $\pa M$ is a smooth manifold;
2. $\pa M$ is a manifold without boundary. That is $\pa\pa M=0$, or $\pa^2=0$.
 

The theorem of partition of unity can be generalized into the following setting.

::Theorem
Let $\{U_j\}_I$ be a locally finite cover of $M$. Then there exists a partition of unity subordinate to the cover $\{\rho_j\}$. Moreover, let 
$$
J=\{j\in I\mid U_j\cap \pa M\neq \emptyset\}.
$$
Then
$$
\{U_j\cap\pa M\}_{j\in J},\qquad \rho_j|_{\pa M\cap U_j}
$$
is a partition of unity subordinate to the corresponding cover.
::

::Exercise
Prove the above theorem.
::
 

::Theorem
[Stokes' Theorem] Let $M$ be an orientable manifold with the given orientation. Then there is a natural orientation on $\pa M$ such that 
$$
\int_M d\omega=\int_{\pa M}\omega
$$
 for any $(n-1)$-forms on $M$.
::

## Proof
Let $\{U_i\}$ be a locally finite cover and let $\{\rho_i\}$ be the partition of unity subordinating to the cover. 
We use the same notation of the index sets $I,J$ as above. Since
$$
d\sum_j\rho_j=0,
$$
we have
$$
\begin{align*}
&
\int_M d\omega=\sum_{i\in I}\int_{U_i}d(\rho_i\omega), \qquad and\\&
\int_{\pa M}\omega=\sum_{j\in J}\int_{\pa M\cap U_j}\rho_j\omega.
\end{align*}
$$

The Stokes' theorem follows from the following statements:

1.
$$
\int_{U_j}d(\rho_j\omega)=0,\qquad j\not\in J;
$$

2.
$$
\int_{U_j}d(\rho_j\omega)=\int_{U_j\cap\{x_n=0\}}\rho_j\omega,\qquad j\in J.
$$

In the first case, we may assume that $U_j$ is the unit ball of $\mathbb R^n$, and ${\rm supp}\,(\rho_j\omega)\subset U_j$. Write
$$
\rho_j\omega=\sum_i (-1)^i f_i dx_1\wedge\cdots \hat{dx_i}\wedge\cdots\wedge dx_n,
$$
where $\hat{\quad}$ means omit the term.
Then
$$
\int_{U_j} d(\rho_j\omega)=\sum_{i=1}^n\frac{\pa f_i}{\pa x_i} dx_1\wedge\cdots\wedge dx_n.
$$
Since $f_j$ vanishes on the boundary of $\pa U_j$, we have
$$
\int_{U_j}d(\rho_j\omega)=0
$$
by the fundamental theorem of Calculus.

The proof of the second assertion is similar. We assume that
$$
U_j=\{(x_1,\cdots,x_n)\mid\sum x_j^2<1, x_n\geq 0\}.
$$
Then we have

$$
d(\rho_j\omega)=\sum_{i=1}^n \frac{\pa f_i}{\pa x_i}dx_1\wedge\cdots\wedge dx_n.
$$
If $i\neq n$, then
$$
\int_{U_j}\frac{\pa f_i}{\pa x_i}dx_1\wedge\cdots\wedge dx_n=0.
$$
With the appropriate orientation, we have

$$
\int_{U_j}\frac{\pa f_n}{\pa x_n}dx_1\wedge\cdots\wedge dx_n=\int_{U_j\cap \{x_n=0\}} f_n dx_1\wedge\cdots\wedge d x_{n-1}.
$$
The theorem follows from the above two equations. 


::Exercise
 Provide the details in the last part of the proof of Stokes' Theorem. In particular, the part that the orientation of $M$ determining that of $\pa M$.
::




::Lemma
Let $M$ be an orientable manifold.
Let $U$ be any open set on $M$ and let $(x_1,\cdots, x_n)$ be a local coordinate system on $U$ that is compatible with respect  to the orientation. 
Then the $n$-form
$$
dV_M=\sqrt{\det(g_{ij})}\, dx_1\wedge\cdots\wedge dx_n
$$
is globally defined, that is, it is independent to the choice of the open set $U$ and the local coordinate system $(x_1,\cdots, x_n)$. 
::


::Definition
Let $f$ be a smooth function with compact support in a Riemannian manifold. Then
$$
\int_M fdV_M=\int_M f\sqrt{\det(g_{ij})} \,dx_1\wedge\cdots\wedge dx_n.
$$
::

::Exercise{tag="ex1.5"}
 Let
$$
X=\sum a^i\frac{\pa}{\pa x_i}
$$
be a vector field of $M$.
The divergence of the vector field $X$ is defined to be
$$
{\rm div}\, X=\sum_i\frac{\pa a^i}{\pa x^i}+\frac 12 a^i\frac{\pa}{\pa x_i}\log\det(g_{k\ell}).
$$
Prove that
$$
\int_M{\rm div}\, X dV_M=0.
::

## Proof
Let
$$
\eta=\sum_{j=1}^n (-1)^{j-1} a^j\sqrt{\det (g_{k\ell})}\,\, dx_1\wedge\cdots \hat{dx_i}\wedge\cdots\wedge dx_n.
$$
We can prove that 
$$
d\eta={\rm div}\, X dV_M,
$$
and the result follows.



<br>
<br>
<br>
<br>
<br>
<br>