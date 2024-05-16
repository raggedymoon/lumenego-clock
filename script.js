<script>
    window.addEventListener('DOMContentLoaded', (event) => {
        const iframe = document.querySelector('iframe');
        iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 'px';
        iframe.style.width = iframe.contentWindow.document.body.scrollWidth + 'px';
    });
</script>
