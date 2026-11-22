import { onActivated, onDeactivated, onMounted, ref, type Ref } from 'vue'

export function useArcadeVideo(video: Ref<HTMLVideoElement | null>) {
    const soundEnabled = ref(false)
    const playbackError = ref('')
    let soundBeforeLeaving = false
    let skipInitialActivation = true

    const playVideo = async () => {
        if (!video.value) return

        try {
            await video.value.play()
            playbackError.value = ''
        } catch {
            playbackError.value = 'No se pudo reproducir el video'
        }
    }

    const onVideoMetadata = () => {
        const player = video.value
        if (!player || !Number.isFinite(player.duration) || player.duration <= 0) return

        player.currentTime = Math.random() * player.duration
        void playVideo()
    }

    const toggleSound = () => {
        soundEnabled.value = !soundEnabled.value
        if (video.value) video.value.muted = !soundEnabled.value
        if (soundEnabled.value) void playVideo()
    }

    onMounted(() => {
        void playVideo()
    })

    onDeactivated(() => {
        soundBeforeLeaving = soundEnabled.value
        soundEnabled.value = false
        if (video.value) video.value.muted = true
    })

    onActivated(() => {
        if (skipInitialActivation) {
            skipInitialActivation = false
            return
        }

        soundEnabled.value = soundBeforeLeaving
        if (video.value) video.value.muted = !soundEnabled.value
        void playVideo()
    })

    return {
        soundEnabled,
        playbackError,
        onVideoMetadata,
        toggleSound,
    }
}
