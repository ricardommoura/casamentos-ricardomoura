"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";

const heroImage =
  "https://format.creatorcdn.com/a4b26b6a-02a8-4ba1-8481-4930bc043308/0/0/0/0,0,2500,1667,300,300/0-0-0/13198fed-4dae-49e8-a83d-aebaa46d8c67/1/4/_MR32461.jpg?fjkss=exp=2110487751~hmac=1c3264a5f9ab2be0e1ede382907301c2983c907b9173e31f8bc2adc517b7bfdd";

function LeadForm() {
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage(
      "Esta pré-visualização não guarda nem envia emails. A entrega será ativada quando ligar um serviço de formulários."
    );
  }

  return (
    <form className="lead-form" onSubmit={handleSubmit}>
      <label className="sr-only" htmlFor="email">
        O vosso email
      </label>
      <div className="form-row">
        <input
          autoComplete="email"
          id="email"
          name="email"
          placeholder="O vosso melhor email"
          required
          type="email"
        />
        <button className="button button-primary" type="submit">
          Quero receber o guia <span aria-hidden="true">↗</span>
        </button>
      </div>
      <label className="consent">
        <input required type="checkbox" />
        <span>
          Autorizo o uso do meu email para receber este guia. Li a{" "}
          <a href="#privacidade">Política de Privacidade</a>.
        </span>
      </label>
      <p aria-live="polite" className="form-message" role="status">
        {message}
      </p>
      <p className="micro-proof">
        <span className="stars" aria-label="Avaliação Google por confirmar">
          ★★★★★
        </span>
        <span>Google: avaliação e nº de opiniões por confirmar</span>
        <span className="proof-dot">·</span>
        <span>Anos de experiência por confirmar</span>
        <span className="proof-dot">·</span>
        <span>Sem spam. Cancele quando quiser.</span>
      </p>
    </form>
  );
}

const guideBenefits = [
  "Um horário realista para guardar retratos sem perder a festa.",
  "7 momentos espontâneos que muitos casais só valorizam depois.",
  "Perguntas certas para escolher fotógrafo e videógrafo sem surpresas.",
  "Informação sobre datas de 2026–2027 e investimento inicial — a confirmar.",
];

export default function WeddingLanding() {
  return (
    <main id="top">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <a className="wordmark" href="#top" aria-label="Ricardo Moura, início">
            <span className="wordmark-name">RICARDO MOURA</span>
            <span className="wordmark-sub">PHOTO & FILM</span>
          </a>
          <p className="eyebrow">Fotografia & filme de casamento · Porto · Braga</p>
          <h1 id="hero-title">
            Um dia vivido por inteiro. Um fotógrafo de casamento no Porto e em Braga.
          </h1>
          <p className="hero-intro">
            Sem poses forçadas: fotografia e filme documentais, atentos ao que acontece.
            Recebam um guia prático para planear o dia sem interromper a celebração.
          </p>
          <LeadForm />
        </div>
        <figure className="hero-photo">
          {/* Source image is served by Ricardo Moura's published wedding portfolio. */}
          <Image
            alt="Momento espontâneo de um casamento fotografado por Ricardo Moura"
            fill
            priority
            sizes="(max-width: 760px) 100vw, 48vw"
            src={heroImage}
          />
          <figcaption>Histórias reais, observadas sem encenar.</figcaption>
          <span className="photo-credit">Fotografia: Ricardo Moura</span>
        </figure>
        <div className="hero-index" aria-hidden="true">01 / 04</div>
      </section>

      <section className="tension section-wrap" aria-labelledby="tension-title">
        <p className="section-kicker">O dia passa depressa</p>
        <h2 id="tension-title">As fotografias devem parecer-vos — não parecer uma sessão.</h2>
        <p>
          Não querem passar o casamento a seguir instruções. Nem chegar a casa e perceber
          que faltam os abraços, os olhares e as pequenas histórias entre os grandes momentos.
        </p>
      </section>

      <section className="guide section-wrap" aria-labelledby="guide-title">
        <div className="guide-heading">
          <p className="section-kicker">Um plano simples para o vosso dia</p>
          <h2 id="guide-title">O Guia de Fotografia & Filme do Casamento</h2>
          <p>Feito para casais que querem estar presentes e guardar o que realmente aconteceu.</p>
        </div>
        <ul className="benefit-list">
          {guideBenefits.map((item, index) => (
            <li key={item}>
              <span className="benefit-number">0{index + 1}</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="free-note">
          Gratuito. Download imediato quando a entrega estiver ativa. Sem obrigação e sem
          chamada comercial.
        </p>
      </section>

      <section className="proof section-wrap" aria-labelledby="proof-title">
        <figure className="proof-photo">
          <Image
            alt="Registo documental de um casamento no portefólio de Ricardo Moura"
            fill
            loading="lazy"
            sizes="(max-width: 760px) 100vw, 34vw"
            src="https://format.creatorcdn.com/a4b26b6a-02a8-4ba1-8481-4930bc043308/0/0/0/0,0,2500,1667,300,300/0-0-0/eecb7258-5567-4a40-a156-5cfce11da9bc/1/4/IMG_3837.jpg?fjkss=exp=2110487751~hmac=1c3264a5f9ab2be0e1ede382907301c2983c907b9173e31f8bc2adc517b7bfdd"
          />
          <figcaption>Fotografia: Ricardo Moura</figcaption>
        </figure>
        <div className="proof-copy">
          <p className="section-kicker">A confiança também se confirma</p>
          <h2 id="proof-title">Uma equipa presente, sem vos tirar do momento.</h2>
          <p>
            A avaliação Google e o número de opiniões serão apresentados aqui depois de
            confirmados. Não usamos testemunhos inventados.
          </p>
          <p className="review-placeholder">[Inserir avaliação Google verificada e nº de opiniões]</p>
        </div>
      </section>

      <section className="authority section-wrap" aria-labelledby="authority-title">
        <div className="authority-mark" aria-hidden="true">RM</div>
        <div>
          <p className="section-kicker">Um só olhar, do início ao álbum</p>
          <h2 id="authority-title">Ricardo Moura — Photo & Film</h2>
          <p>
            Com estúdio em Santo Tirso, Ricardo e a equipa trabalham no Porto, Braga e no
            Norte de Portugal. A abordagem é documental e espontânea: observam em vez de
            dirigir. Fotografia, filme e álbuns personalizados são pensados pela mesma equipa;
            os álbuns são produzidos num laboratório fotográfico profissional certificado.
          </p>
        </div>
      </section>

      <section className="second-cta section-wrap" aria-labelledby="second-cta-title">
        <p className="section-kicker">Planeiem com calma</p>
        <h2 id="second-cta-title">Saibam o que perguntar antes de escolher quem vos acompanha.</h2>
        <a className="button button-primary" href="#email">
          Quero receber o guia <span aria-hidden="true">↗</span>
        </a>
      </section>

      <section className="faq section-wrap" aria-labelledby="faq-title">
        <p className="section-kicker">Dúvidas rápidas</p>
        <h2 id="faq-title">Antes de receberem o guia</h2>
        <dl>
          <div><dt>Qual é o investimento?</dt><dd>O valor inicial de fotografia e filme será confirmado com a equipa.</dd></div>
          <div><dt>Que zonas abrangem?</dt><dd>Porto, Braga e Norte de Portugal, com estúdio em Santo Tirso.</dd></div>
          <div><dt>É possível escolher fotografia ou filme?</dt><dd>Sim. A equipa trabalha ambos; o guia ajuda-vos a decidir o que faz sentido.</dd></div>
          <div><dt>O que acontece depois de pedir?</dt><dd>O guia será enviado por email quando o formulário estiver ligado; confirmem também o spam.</dd></div>
        </dl>
      </section>

      <footer className="footer" id="privacidade">
        <a className="footer-brand" href="#top">Ricardo Moura <span>Photo & Film</span></a>
        <span>Estúdio em Santo Tirso, Portugal</span>
        <a href="https://www.instagram.com/ricardomoura/" target="_blank" rel="noreferrer">Instagram</a>
        <a href="https://www.ricardomoura.net/privacidade" target="_blank" rel="noreferrer">Política de Privacidade</a>
        <small>© Ricardo Moura</small>
      </footer>

      <a className="mobile-sticky" href="#hero-title">Receber o guia gratuito <span aria-hidden="true">↗</span></a>
    </main>
  );
}
