<script setup lang="ts">
import footerImage from '@/assets/images/SonicFooter.png'
import tomodachi from '@/assets/images/tomodachi.gif'
import helpIcon from '@/assets/images/help.png'
import homeIcon from '@/assets/images/RetroPiñata_logo.png'
import githubIcon from '@/assets/images/github.png'
const emit = defineEmits<{
    toggleHelp: []
}>()

const subirAlInicio = () => {
    document.getElementById('app')?.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
    <footer class="site-footer" aria-label="Pie de página">
        <img :src="footerImage" alt="" aria-hidden="true" />
        <nav class="footer-links" aria-label="Enlaces del pie de página">
            <RouterLink class="footer-card" @click="subirAlInicio" to="/nosotros" aria-label="Nosotros">
                <img class="nosotros-icon" :src="tomodachi" alt="" aria-hidden="true" />
                <span>Nosotros</span>
            </RouterLink>
            <button class="footer-card" type="button" aria-label="Abrir chat de ayuda" @click="emit('toggleHelp')">
                <img :src="helpIcon" alt="" aria-hidden="true" />
                <span>Ayuda</span>
            </button>
            <a class="footer-card email-card" href="mailto:pinatasgaming@hotmail.com">
                <span class="footer-symbol" aria-hidden="true">✉</span>
                <span>Correo: pinatasgaming@hotmail.com</span>
            </a>
            <a class="footer-card" href="https://github.com/Bobmataplagas/batallasVue" target="_blank" rel="noopener noreferrer">
                <img class="github-icon" :src="githubIcon" alt="" aria-hidden="true" />
                <span>GitHub del proyecto</span>
            </a>
            <button class="footer-card" @click="subirAlInicio">
                <img :src="homeIcon" alt="" aria-hidden="true" />
                <span>Arriba</span>
            </button>
        </nav>
    </footer>
</template>

<style scoped>
.site-footer {
    position: relative;
    width: 100%;
    flex-shrink: 0;
    pointer-events: none;
}

.site-footer > img {
    display: block;
    width: 100%;
    height: auto;
}

.footer-links {
    position: absolute;
    bottom: 0.75rem;
    left: 1rem;
    right: 1rem;
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    justify-content: center;
    gap: 0.75rem;
    pointer-events: none;
}

.footer-card {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.6rem 0.9rem;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 10px;
    background: rgba(65, 64, 64, 0.644);
    -webkit-backdrop-filter: blur(2px);
    backdrop-filter: blur(2px);
    color: #ffc96b;
    font-size: 1.2rem;
    font-weight: 700;
    text-decoration: none;
    pointer-events: auto;
    cursor: pointer;
    transition: background-color 160ms ease, transform 160ms ease;
}

.footer-card:hover {
    transform: translateY(-2px);
    background: rgba(65, 64, 64, 0.85);
}

.footer-card img {
    flex: 0 0 auto;
    width: 3rem;
    height: 3rem;
    object-fit: contain;
}

.footer-card .nosotros-icon {
    width: 4rem;
    height: 4rem;
}

.footer-symbol {
    display: grid;
    flex: 0 0 3rem;
    width: 3rem;
    height: 3rem;
    place-items: center;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.14);
    color: #fff;
    font-size: 1.8rem;
}

.github-icon {
    filter: brightness(0) invert(1);
}

.email-card span:last-child {
    overflow-wrap: anywhere;
}

@media (max-width: 700px) {
    .footer-links {
        bottom: 0.5rem;
        gap: 0.5rem;
    }

    .footer-card {
        gap: 0.5rem;
        padding: 0.4rem 0.6rem;
        font-size: 0.9rem;
    }

    .footer-card img,
    .footer-card .nosotros-icon {
        width: 2.5rem;
        height: 2.5rem;
    }

    .footer-symbol {
        flex-basis: 2.5rem;
        width: 2.5rem;
        height: 2.5rem;
        font-size: 1.4rem;
    }
}
</style>
