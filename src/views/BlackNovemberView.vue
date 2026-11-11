<template>
  <section class="black-november">
    <div class="campaign-shell">
      <header class="campaign-intro">
        <span class="campaign-label">Black November <span aria-hidden="true">/</span> CodeWil</span>
        <h1>
          Seu próximo projeto merece
          <span> sair do papel.</span>
        </h1>
        <p class="campaign-description">
          Este é o momento de dar o próximo passo no digital. Conte um pouco sobre
          o que você precisa e receba um pré-orçamento personalizado, sem compromisso.
        </p>

        <ul class="campaign-highlights">
          <li>
            <span class="highlight-number">01</span>
            <span>
              <strong>Feito para o seu negócio</strong>
              Uma proposta pensada para o seu momento.
            </span>
          </li>
          <li>
            <span class="highlight-number">02</span>
            <span>
              <strong>Conversa sem compromisso</strong>
              Entenda possibilidades, etapas e investimento.
            </span>
          </li>
          <li>
            <span class="highlight-number">03</span>
            <span>
              <strong>Condições especiais</strong>
              Consulte as condições disponíveis para novos projetos.
            </span>
          </li>
        </ul>

        <p class="campaign-note">
          Sites · Sistemas web · Automações · Consultoria
        </p>
      </header>

      <div class="budget-card" id="pre-orcamento">
        <div class="budget-heading">
          <span class="eyebrow">Vamos conversar</span>
          <h2>Peça seu pré-orçamento</h2>
          <p>Preencha os campos e retorno para entender melhor o seu projeto.</p>
        </div>

        <form class="budget-form" @submit.prevent="sendRequest">
          <div class="form-row">
            <label for="budget-name">
              Seu nome
              <input
                id="budget-name"
                v-model="inquiry.name"
                name="name"
                autocomplete="name"
                placeholder="Como podemos te chamar?"
                required
              >
            </label>
            <label for="budget-email">
              E-mail
              <input
                id="budget-email"
                v-model="inquiry.email"
                name="email"
                type="email"
                autocomplete="email"
                placeholder="voce@empresa.com"
                required
              >
            </label>
          </div>

          <div class="form-row">
            <label for="budget-whatsapp">
              WhatsApp
              <input
                id="budget-whatsapp"
                v-model="inquiry.whatsapp"
                name="whatsapp"
                type="tel"
                autocomplete="tel"
                placeholder="(00) 00000-0000"
                required
              >
            </label>
            <label for="budget-service">
              O que você precisa?
              <select id="budget-service" v-model="inquiry.service" name="service" required>
                <option disabled value="">Selecione uma opção</option>
                <option>Site institucional</option>
                <option>Loja virtual</option>
                <option>Sistema ou plataforma web</option>
                <option>Automação ou integração</option>
                <option>Consultoria técnica</option>
                <option>Outro projeto</option>
              </select>
            </label>
          </div>

          <div class="form-row">
            <label for="budget-investment">
              Faixa de investimento <span class="optional">(opcional)</span>
              <select id="budget-investment" v-model="inquiry.investment" name="investment">
                <option value="">Prefiro conversar primeiro</option>
                <option>Até R$ 3.000</option>
                <option>De R$ 3.000 a R$ 6.000</option>
                <option>De R$ 6.000 a R$ 12.000</option>
                <option>Acima de R$ 12.000</option>
              </select>
            </label>
            <label for="budget-timing">
              Quando pretende começar?
              <select id="budget-timing" v-model="inquiry.timing" name="timing" required>
                <option disabled value="">Selecione uma opção</option>
                <option>Assim que possível</option>
                <option>Nos próximos 30 dias</option>
                <option>Daqui a 1 a 3 meses</option>
                <option>Estou pesquisando possibilidades</option>
              </select>
            </label>
          </div>

          <label for="budget-details">
            Conte um pouco sobre o projeto
            <textarea
              id="budget-details"
              v-model="inquiry.details"
              name="details"
              rows="4"
              placeholder="Qual desafio você quer resolver ou ideia quer tirar do papel?"
              required
            ></textarea>
          </label>

          <button class="button button-primary budget-submit" type="submit" :disabled="sending">
            {{ sending ? 'Enviando solicitação…' : 'Quero meu pré-orçamento' }}
            <component
              :is="'ion-icon'"
              :class="{ 'is-spinning': sending }"
              :icon="sending ? syncOutline : arrowForwardOutline"
              aria-hidden="true"
            />
          </button>
          <p
            v-if="status"
            class="form-feedback"
            :class="`form-feedback--${statusType}`"
            :role="statusType === 'error' ? 'alert' : 'status'"
            aria-live="polite"
          >
            {{ status }}
          </p>
          <p class="privacy-note">
            Seus dados serão usados somente para entrar em contato sobre este projeto.
          </p>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import { arrowForwardOutline, syncOutline } from 'ionicons/icons';
import useSeo from '@/composables/useSeo';
import { sendContactMessage } from '@/services/contact';

useSeo(
  'Black November | Pré-orçamento de projeto — CodeWil',
  'Peça um pré-orçamento personalizado para seu site, sistema web ou automação com a CodeWil.',
  '/black-november',
);

const inquiry = reactive({
  name: '',
  email: '',
  whatsapp: '',
  service: '',
  investment: '',
  timing: '',
  details: '',
});
const sending = ref(false);
const status = ref('');
const statusType = ref<'success' | 'error'>('success');

async function sendRequest() {
  if (sending.value) return;

  sending.value = true;
  status.value = '';
  try {
    await sendContactMessage({
      name: inquiry.name,
      email: inquiry.email,
      message: [
        'Solicitação de pré-orçamento — Black November',
        `WhatsApp: ${inquiry.whatsapp}`,
        `Serviço: ${inquiry.service}`,
        `Faixa de investimento: ${inquiry.investment || 'Prefere conversar primeiro'}`,
        `Previsão para começar: ${inquiry.timing}`,
        '',
        'Sobre o projeto:',
        inquiry.details,
      ].join('\n'),
    }, 'codewil.json@gmail.com');
    statusType.value = 'success';
    status.value = 'Solicitação enviada! Em breve entro em contato para conversar sobre seu projeto.';
    inquiry.name = '';
    inquiry.email = '';
    inquiry.whatsapp = '';
    inquiry.service = '';
    inquiry.investment = '';
    inquiry.timing = '';
    inquiry.details = '';
  } catch {
    statusType.value = 'error';
    status.value = 'Não foi possível enviar sua solicitação agora. Tente novamente em instantes.';
  } finally {
    sending.value = false;
  }
}
</script>

<style scoped>
.black-november {
  position: relative;
  overflow: hidden;
  padding: clamp(48px, 8vw, 100px) 24px;
  background:
    radial-gradient(
      ellipse at 10% 12%,
      color-mix(in srgb, var(--accent) 10%, transparent),
      transparent 34%
    ),
    var(--page);
}

.campaign-shell {
  display: grid;
  width: min(1120px, 100%);
  align-items: start;
  gap: clamp(36px, 7vw, 88px);
  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1fr);
  margin-inline: auto;
}

.campaign-intro {
  padding-top: 20px;
}

.campaign-label,
.eyebrow {
  color: var(--accent);
  font-family: "DM Mono", monospace;
  font-size: 11px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.campaign-label span {
  padding-inline: 5px;
  color: var(--subtle);
}

.campaign-intro h1 {
  max-width: 580px;
  margin: 24px 0 20px;
  font-size: clamp(42px, 5.2vw, 66px);
  letter-spacing: -0.07em;
  line-height: 1.02;
}

.campaign-intro h1 span {
  color: var(--accent);
}

.campaign-description {
  max-width: 490px;
  margin-bottom: 32px;
  color: var(--muted);
  font-size: 16px;
}

.campaign-highlights {
  display: grid;
  gap: 20px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.campaign-highlights li {
  display: grid;
  align-items: start;
  gap: 13px;
  grid-template-columns: 32px 1fr;
  color: var(--muted);
  font-size: 13px;
  line-height: 1.55;
}

.campaign-highlights strong {
  display: block;
  margin-bottom: 3px;
  color: var(--text);
  font-size: 14px;
}

.highlight-number {
  color: var(--accent);
  font-family: "DM Mono", monospace;
  font-size: 12px;
}

.campaign-note {
  margin: 32px 0 0;
  padding-top: 18px;
  border-top: 1px solid var(--border);
  color: var(--subtle);
  font-family: "DM Mono", monospace;
  font-size: 10px;
  letter-spacing: 0.06em;
}

.budget-card {
  padding: clamp(24px, 4vw, 38px);
  border: 1px solid var(--border);
  border-top: 2px solid var(--accent);
  border-radius: 6px;
  background: var(--surface);
  box-shadow: var(--shadow);
}

.budget-heading {
  margin-bottom: 24px;
}

.budget-heading h2 {
  margin: 10px 0 8px;
  font-size: clamp(25px, 3vw, 34px);
}

.budget-heading p {
  margin: 0;
  color: var(--muted);
  font-size: 13px;
}

.budget-form {
  display: grid;
  gap: 15px;
}

.form-row {
  display: grid;
  gap: 12px;
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.budget-form label {
  display: grid;
  gap: 6px;
  color: var(--muted);
  font-size: 11px;
  font-weight: 700;
}

.budget-form input,
.budget-form select,
.budget-form textarea {
  width: 100%;
  min-width: 0;
  min-height: 44px;
  padding: 10px 12px;
  border: 1px solid var(--border);
  border-radius: 4px;
  background: var(--page);
  color: var(--text);
  font-size: 12px;
}

.budget-form input::placeholder,
.budget-form textarea::placeholder {
  color: var(--subtle);
  opacity: 1;
}

.budget-form select:invalid {
  color: var(--subtle);
}

.budget-form textarea {
  min-height: 104px;
  resize: vertical;
}

.optional {
  color: var(--subtle);
  font-weight: 400;
}

.budget-submit {
  width: 100%;
  min-height: 50px;
  margin-top: 2px;
  border-radius: 4px;
}

.budget-submit:disabled {
  cursor: wait;
  opacity: 0.72;
}

.budget-submit ion-icon.is-spinning {
  animation: submit-icon-spin 900ms linear infinite;
}

.form-feedback,
.privacy-note {
  margin: 0;
  font-size: 11px;
}

.form-feedback--success {
  color: var(--accent);
}

.form-feedback--error {
  color: #e78383;
}

.privacy-note {
  color: var(--subtle);
  text-align: center;
}

@keyframes submit-icon-spin {
  to {
    transform: rotate(360deg);
  }
}

@media (max-width: 820px) {
  .campaign-shell {
    max-width: 650px;
    gap: 38px;
    grid-template-columns: 1fr;
  }

  .campaign-intro {
    padding-top: 0;
  }

  .campaign-highlights {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .campaign-highlights li {
    gap: 6px;
    grid-template-columns: 1fr;
  }
}

@media (max-width: 560px) {
  .black-november {
    padding-inline: 18px;
  }

  .campaign-intro h1 {
    font-size: clamp(39px, 11vw, 54px);
  }

  .campaign-highlights {
    grid-template-columns: 1fr;
  }

  .campaign-highlights li {
    gap: 12px;
    grid-template-columns: 28px 1fr;
  }

  .form-row {
    grid-template-columns: 1fr;
  }
}

@media (prefers-reduced-motion: reduce) {
  .budget-submit ion-icon.is-spinning {
    animation: none;
  }
}
</style>
