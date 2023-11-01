---
title: The extension of the Levi-Civita connection
---
Let $M$ be a Riemannian manifold and let $\nabla$ be the Levi-Civita connection\footnote{most result in this section is actually true for any affine connection.}. We extend $\nabla$ to all tensor fields on $M$ as follows.

\begin{definition}\label{def12} Let $X,Y$ be vector fields on $M$.
\begin{enumerate}
\item If $f\in \mathcal C^\infty(M)$, then $\nabla_X f=Xf$;
\item  $\nabla _XY$ is defined by the  connection itself;
\item If $\omega$ is a one-form, then $\nabla_X\omega$ is defined by the equation
$
(\nabla_X\omega)Y=X(\omega(Y))-\omega(\nabla_XY).
$
 \item In general, let $\{e_1,\cdots,e_n\}$ be a local frame of $M$ and let $\omega_1,\cdots,\omega_n$ be the dual frame.  Let
  \[
 T=a_{i_1\cdots i_p j_1\cdots j_q}e_{i_1}\otimes\cdots \otimes e_{i_p}\otimes\omega_{j_1}\otimes\cdots\otimes \omega_{j_q}.
 \]
We define
 \begin{align*}
 &\nabla_X T=X(a_{i_1\cdots i_pj_1\cdots j_q})e_{i_1}\otimes\cdots\otimes \omega_{j_q}\\
 &+\sum_{s=1}^p a_{i_1\cdots i_pj_1\cdots j_q}e_{i_1}\otimes\cdots\otimes \nabla_X e_{i_s}\otimes \cdots
 e_{i_p}\otimes \omega_{j_1}\cdots\otimes
 \otimes \omega_{j_q}\\\
 &+\sum_{t=1}^q a_{i_1\cdots i_pj_1\cdots j_q}e_{i_1}\otimes\cdots\otimes e_{i_p}\otimes \omega_{j_1}\otimes\cdots\otimes \nabla_X \omega_{j_t}\otimes \cdots\otimes \omega_{j_q}.
 \end{align*}
 \end{enumerate}
 \end{definition}


Using the above notations, we have
\begin{theorem} We have 
\[
\nabla_X ds^2=0,
\]
 where $ds^2$ is the Riemannian metric of $M$.
\end{theorem}

\begin{proof}[Proof 1.]
Let $(x_1,\cdots,x_n)$ be a local coordinate system, and let $\Gamma_{ij}^k$ be the Christoffel symbols. Write 
$ds^2=g_{ij} dx_idx_j$.
We then have
\[
\nabla_{\frac{\pa}{\pa x_k}}\frac{\pa}{\pa x_i}=\Gamma_{ki}^\ell\frac{\pa}{\pa x_\ell}
\]
and 
\[
\nabla_{\frac{\pa}{\pa x_k}}dx_j=-\Gamma_{k\ell}^jdx_\ell.
\]
Thus we have
\[
\nabla_{\frac{\pa}{\pa x_k}} ds^2= \nabla_{\frac{\pa}{\pa x_k}} g_{ij}dx_idx_j
=\frac{\pa g_{ij}}{\pa x_k}dx_idx_j-g_{ij}\Gamma_{k\ell}^i dx_\ell dx_j-g_{ij}\Gamma_{k\ell}^j dx_i dx_\ell=0,
\]
for any $k$. The theorem is proved. 
\end{proof} 

\begin{proof}[Proof 2.]Using the intrinsic 
characterization of the Riemannian metric: $ds^2(X,Y)=\langle X, Y\rangle$, we have
\[
(\nabla_X ds^2)(Y,Z)=X(\langle Y,Z\rangle)-\langle\nabla_X Y,Z\rangle-\langle Y,\nabla_X Z\rangle=0.
\]

\end{proof}
\spc


We also have the following  result which well justifies our definition of the curvature operator.

\begin{theorem}
Let $d_{\nabla^2}$ be the operator defined by the composition
\[
TM\overset{\nabla}{\longrightarrow}TM\otimes T^*M\overset{\nabla}{\longrightarrow}TM\otimes T^*M\otimes T^*M\overset{\wedge}{\longrightarrow}TM\otimes\Lambda^2(M).
\]
Then it is the curvature operator.
\end{theorem}

\begin{proof}
We have
\[
\nabla\frac{\pa}{\pa x_i}=\Gamma_{ki}^j\frac{\pa}{\pa x_j}\otimes dx_k,
\]
and 
\begin{align*}
&
\qquad \nabla^2\frac{\pa}{\pa x_i}=\frac{\pa \Gamma_{ki}^j}{\pa x_\ell}\cdot\frac{\pa}{\pa x_j}\otimes dx_k\otimes dx_\ell\\
&+\Gamma_{ki}^j\Gamma_{\ell j}^m\frac{\pa}{\pa x_m}\otimes dx_k\otimes dx_\ell
-\Gamma_{ki}^j\Gamma_{\ell m}^k\frac{\pa}{\pa x_j}
\otimes dx_m\otimes dx_\ell.
\end{align*}
Then we have
\begin{align*}
&
\qquad d_{\nabla^2}\frac{\pa}{\pa x_i}=\frac{\pa \Gamma_{ki}^j}{\pa x_\ell}\cdot\frac{\pa}{\pa x_j}\otimes dx_k\wedge  dx_\ell\\
&+\Gamma_{ki}^j\Gamma_{\ell j}^m\frac{\pa}{\pa x_m}\otimes dx_k\wedge dx_\ell
-\Gamma_{ki}^j\Gamma_{\ell m}^k\frac{\pa}{\pa x_j}
\otimes dx_m\wedge dx_\ell.
\end{align*}
Since $\Gamma_{\ell m}^k=\Gamma_{m \ell}^k$, the last term of the above equation is zero. Thus after changing indices, we have

\[
d_{\nabla^2}\frac{\pa}{\pa x_i}=\left(\frac{\pa \Gamma_{ki}^j}{\pa x_\ell}-\Gamma_{ki}^m\,\Gamma_{\ell m}^j\right) \cdot\frac{\pa}{\pa x_j}\otimes dx_k\wedge  dx_\ell.
\]
By a straightforward computation, we get
\[
d_{\nabla^2}\frac{\pa}{\pa x_i}=\frac 12 R_{imk\ell}g^{mj}\,\frac{\pa}{\pa x_j}\otimes dx_k\wedge dx_\ell,
\]
where 
\begin{equation}\label{1.1}
R_{ijk\ell}=g_{js}\left(\frac{\pa \Gamma_{ki}^s}{\pa x_\ell}-\frac{\pa \Gamma_{\ell i}^s}{\pa x_k}-\Gamma_{ki}^m\,\Gamma_{\ell m}^s+\Gamma_{\ell i}^m\,\Gamma_{k m}^s
\right).
\end{equation}
\end{proof}


\spc 


As showed above, it is quite tedious to use local coordinates to compute the curvature. The natural frame
\[
\left(\frac{\pa}{\pa x_1},\cdots,\frac{\pa}{\pa x_n}\right)
\]
may not be our best choice. Thus in most cases, we use orthonormal frames.

Let $e_1,\cdots,e_n$ be local orthonormal frame\footnote{ that is, $\langle e_i,e_j\rangle=\delta_{ij}$.}  and let $\omega_1,\cdots,\omega_n$ be the dual frame. Then the Riemannian metric can be written as
\[
ds^2=\omega_1\otimes\omega_1+\cdots+\omega_n\otimes\omega_n=\omega_1^2+\cdots+\omega_n^2.
\]


The connection $1$-forms are defined by
\begin{equation}\label{connection}
\nabla_X e_j=\omega_{ij}(X) e_i,
\end{equation}
where $X$ is a vector field. This can also be written as
\[
\nabla e_j=\omega_{ij}\otimes e_i=\omega_{ij}\, e_i.
\]
\begin{lemma}
We have
\[
\nabla \omega_k=-\omega_{ki}\,\omega_i.
\]
\end{lemma}

\spc
The proof is straightforward and left to the reader.
\spc

Define
\begin{equation}\label{curvature-3}
R_{ijk\ell}=\langle \nabla_{e_k}\nabla_{e_\ell} e_j-\nabla_{e_\ell}\nabla_{e_k} e_j
-\nabla_{[e_k,e_\ell]}e_j,e_i\rangle.
\end{equation}
Then 
\[
R=R_{ijk\ell} \, \omega_i\wedge\omega_j\otimes\omega_k\wedge\omega_\ell
\]
is a tensor, which is called the curvature tensor. On the other hand, since we can represent $R$ as the matrix whose $(i,j)$-th entry is given by $R_{ijk\ell} \, \omega_k\wedge\omega_\ell$, it is also called the curvature operator. 
\spc
\begin{proposition}\label{10-prop}
Let $(e_1,\cdots, e_n)$ be a local frame and let $(\omega_1,\cdots, \omega_n)$ be its dual frame. Let $h_{ij}=\langle e_i, e_j\rangle$. Then
\[
d_{\nabla^2} e_i=\frac 12  R_{isk\ell}\, h^{sj}\,e_j,
\]
where $h^{ij}$ is the inverse matrix of $h_{ij}$.
\end{proposition}

\begin{proof}
We have
\[
\nabla e_i=(\nabla_{e_k} e_i)\,\omega_k.
\]
Thus
\[
\nabla^2 e_i=\nabla_{e_\ell}((\nabla_{e_k} e_i)\,\omega_k)\,\omega_\ell
=(\nabla_{e_\ell}\nabla_{e_k} e_i)\,\omega_k\,\omega_\ell+\nabla_{e_k} e_i\, \nabla_{e_\ell}\omega_k\,\omega_\ell. 
\]
By definition, we have
\[
\nabla_{e_\ell}\omega_k=-\omega_k(\nabla_{e_\ell} e_s)\, \omega_s. 
\]
Thus we have
\[
\nabla^2 e_i=(\nabla_{e_\ell}\nabla_{e_k} e_i)\,\omega_k\,\omega_\ell-\nabla_{e_k} e_i\,(\omega_k(\nabla_{e_\ell} e_s))\, \omega_s\,\omega_\ell.
\]
Changing indices, we obtain
\[
\nabla^2 e_i=(\nabla_{e_\ell}\nabla_{e_k} e_i- \nabla_{e_s} e_i\,(\omega_s(\nabla_{e_\ell} e_k)))\omega_k\,\omega_\ell= (\nabla_{e_\ell}\nabla_{e_k} e_i- \nabla_{(\nabla_{e_\ell} e_k)} e_i\,)\omega_k\,\omega_\ell.
\]
Thus we have 
\[
d_{\nabla^2} e_i=(\nabla_{e_\ell}\nabla_{e_k} e_i- \nabla_{(\nabla_{e_\ell} e_k)} e_i)\,\omega_k\wedge\omega_\ell.
\]
Using the fact that 
\[
\nabla_{e_\ell} e_k-\nabla_{e_k} e_\ell=[e_\ell, e_k],
\]
we obtain
\[
d_{\nabla^2} e_i=\frac 12(\nabla_{e_\ell}\nabla_{e_k} e_i-\nabla_{e_k}\nabla_{e_\ell} e_i-\nabla_{[e_\ell, e_k]} e_i)
=\frac 12 R_{isk\ell}\, h^{sj}\,e_j.
\]
\end{proof}


\spc
One can write the above formulas  in the following  dual form. 
\begin{proposition}[E. Cartan]\label{cartan-1}
Let $(e_1,\cdots,e_n)$ be an orthonormal frame and $(\omega_1,\cdots,\omega_n)$ be its dual frame. Let $\omega_{ij}$ be the connection $1$-forms defined in~\eqref{connection}. Then we have
\[
\left\{
\begin{array}{l}
d\omega_j+\omega_i\wedge\omega_{ij}=0,\\
d\omega_{ij}+\omega_{is}\wedge\omega_{sj}=\frac 12 R_{ijk\ell}\,\omega_k\wedge\omega_\ell.
\end{array}
\right.
\]
\end{proposition}

\begin{proof} The above formulas are known as the first and the second Cartan formulas. 
Using ~\eqref{connection}, we obtain
\[
\omega_{kj}(e_\ell)=\langle\nabla_{e_\ell} e_j, e_k\rangle.
\]
Thus we have 
\[
d\omega_j(e_k,e_\ell)=e_k(\omega_j(e_\ell))-e_\ell(\omega_j(e_k))-\omega_j([e_k,e_\ell])=-\omega_j([e_k,e_\ell]).
\]
On the other hand, we have
\[
\omega_i\wedge\omega_{ij}(e_k,e_\ell)=\delta_{ik}\,\omega_{ij}(e_\ell)-\delta_{i\ell}\,\omega_{ij}(e_k)=\omega_{kj}(e_\ell)-\omega_{\ell j}(e_k)=\langle\nabla_{e_\ell} e_j, e_k\rangle-\langle\nabla_{e_k} e_j, e_\ell\rangle.
\]
Using the fact that $(e_1,\cdots,e_n)$ is an orthonormal frame, we have
\[
\omega_i\wedge\omega_{ij}(e_k,e_\ell)=-\langle e_j, \nabla_{e_\ell}e_k\rangle+\langle e_j, \nabla_{e_k}e_\ell\rangle
=\langle e_j,[e_k,e_\ell]\rangle. 
\]
This proves the first formula. The second formula can be proved using the similar way:
we have
\[
\begin{split}
&
d\omega_{ij}(e_k,e_\ell)=e_k(\omega_{ij}(e_\ell))-e_\ell(\omega_{ij}(e_k))-\omega_{ij}([e_k,e_\ell])\\
&=e_k(\langle\nabla_{e_\ell} e_j, e_i\rangle)-e_\ell(\langle\nabla_{e_k} e_j, e_i\rangle)-\langle\nabla_{[e_k,e_\ell]} e_j, e_i\rangle\\
&=\langle \nabla_{e_k}\nabla_{e_\ell} e_j-\nabla_{e_\ell}\nabla_{e_k} e_j-\nabla_{[e_k,e_\ell]} e_j, e_i\rangle
+\langle\nabla_{e_\ell} e_j, \nabla_{e_k}e_i\rangle- \langle\nabla_{e_k} e_j, \nabla_{e_\ell}e_i\rangle
\end{split}
\]
The last two terms of the above can be written as
\[
\begin{split}
& \langle\nabla_{e_\ell} e_j, e_s\rangle\cdot\langle e_s,\nabla_{e_k}e_i\rangle- \langle\nabla_{e_k} e_j, e_s\rangle\cdot\langle e_s, \nabla_{e_\ell}e_i\rangle\\
&=\omega_{sj}(e_\ell)\cdot \omega_{si}(e_k)-\omega_{sj}(e_k)\cdot \omega_{si}(e_\ell)=-\omega_{is}\wedge\omega_{sj}(e_k,e_\ell).
\end{split}
\]
This proves the second formula. 
\end{proof}

\spc

\begin{remark}
If we write $\omega=(\omega_1,\cdots,\omega_n)$; $\Theta=(\omega_{ij})$ as the connection matrix; and $R$ as the matrix whose entries are $\frac 12 R_{ijk\ell}\omega_k\wedge\omega_{\ell}$. Then we can write up the Cartan's formulas as the matrix form
\[
\left\{
\begin{array}{l}
d\omega+\omega\wedge\Theta=0,\\
d\Theta+\Theta\wedge\Theta=R.
\end{array}
\right.
\]
\end{remark}

\spc

\begin{remark}
If $(e_1,\cdots,e_n)$ be an arbitrary frame and $(\omega^1,\cdots,\omega^n)$ be the dual frame. Let
\[
\nabla e_j=\omega_j^i\, e_i.
\]
Then we also have the Cartan formulas. 
\[
\left\{
\begin{array}{l}
d\omega^i+\omega^j\wedge\omega_{j}^i=0,\\
d\omega_{j}^i+\omega_{s}^i\wedge\omega_{j}^s=\frac 12 h^{is}R_{sjk\ell}\,\omega_k\wedge\omega_\ell.
\end{array}
\right.
\]
\end{remark}
\spc


\begin{exercise} If $(e_1,\cdots,e_n)$ is an orthonormal frame. Prove that $\omega_{ij}=-\omega_{ji}$.\end{exercise}

 
\spc 

\begin{exercise} Prove that given $\omega_j$, there are unique $\omega_{ij}$ with $\omega_{ij}=-\omega_{ji}$ satisfying the first Cartan equation. In other words, the skew-symmetry   and the first Cartan formula uniquely determines the connection matrix. 
\end{exercise}

\spc

\begin{exercise} Prove that at any point $p$, one can choose an orthonormal frame such that at $p$, the connection matrix $\omega_{ij}$ is zero.
\end{exercise}

\spc 

\begin{exercise} Prove that, if the curvature is zero on an open set, then at each point of that set, there is a neighborhood of the point on which  one can choose an orthonormal  frame such that the connection matrix is identically zero.\end{exercise}

\spc 

In the following we give two examples of computing the curvature using the Cartan's formula. 

\spc

\begin{example}\label{ex1-1}
On $\R^n$, we give the Riemannian metric to be
\[
ds^2=\frac{dx_1^2+\cdots +dx_n^2}{(1+\frac K4\sum x_k^2)^2}.
\]
Let
\[
A=1+\frac K4\sum x_k^2.
\]
and let $A_j=\frac{\pa A}{\pa x_j}$. We take 
\[
\omega_i=\frac{dx_i}{A}.
\]
Let
\[
\omega_{ij}=\frac{1}{A}(A_i\,dx_j-A_j\,dx_i).
\]
Then we have
\[
d\omega_j+\omega_i\wedge\omega_{ij}=0.
\]
Moreover, we have
\[
d\omega_{ij}+\omega_{is}\wedge\omega_{sj}=K\,\omega_i\wedge\omega_j.
\]
Thus the curvature tensor is
\[
R_{ijk\ell}=K\,(\delta_{ik}\delta_{j\ell}-\delta_{i\ell}\delta_{jk}),
\]
and the sectional curvature of the metric  is $K$.
\end{example}

\spc

\begin{remark}
\emph{On the hypotheses which underlie geometry} is the title of talk given on June 10, 1854 by Bernhard Riemann before the G\"ottingen Faculty that included Gauss, Dedekind, and Weber in the audience. Its original German title was \emph{\"Uber die Hypothesen, welche der Geometrie zu Grunde liegen}. In that lecture, the above example was first introduced, representing the born of Riemannian Geometry.
\end{remark}

\spc



\begin{example}
Define
\[
S^n=\{(x_1,\cdots,x_{n+1})\mid \sum x_k^2=1\}
\]
and the Riemannian metric to be the inherited metric 
\[
ds^2=dx_1^2+\cdots +dx_n^2+\frac{x_ix_j}{x^2_{n+1}}\, dx_i\,dx_j.
\]
Define
\[
\omega_i=dx_i-\frac{x_i}{1+x_{n+1}}\,dx_{n+1}.
\]
Then
\[
\omega_{ij}=\frac{1}{1+x_{n+1}}(x_i\,dx_j-x_j\,dx_i).
\]
Thus we have
\[
d\omega_j+\omega_i\wedge\omega_{ij}=0,
\]
and
\[
d\omega_{ij}+\omega_{is}\wedge\omega_{sj}=\omega_i\wedge\omega_j.
\]
Thus the sectional curvature is $1$.
\end{example}
