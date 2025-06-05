document.addEventListener('DOMContentLoaded', function() {
    // Carrega o conteúdo inicial (página Sobre)
    loadPage('sobre');
    
    // Configura os listeners de navegação
    setupNavigation();
});

// Dados das páginas
const pages = {
    'sobre': {
        title: 'Quem nós somos?',
        content: `
            <section id="sobre" class="py-5">
                <div class="container">
                    <h1 class="section-title">Quem nós somos?</h1>
                    <div class="row align-items-center">
                        <div class="col-lg-6 mb-4 mb-lg-0">
                            <img src="img/advogado.jpg" alt="Advogado" class="img-fluid rounded">
                        </div>
                        <div class="col-lg-6">
                            <div class="p-4 bg-dark rounded">
                                <p class="lead">Somos um escritório de advocacia comprometido com a excelência jurídica e a satisfação de nossos clientes.</p>
                                <p>Nossa equipe é formada por profissionais altamente qualificados e experientes em diversas áreas do direito, prontos para oferecer soluções jurídicas personalizadas e eficientes.</p>
                                <p>Acreditamos na justiça e na defesa intransigente dos direitos de nossos clientes, sempre pautados pela ética, transparência e comprometimento.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `
    },
    'areas': {
        title: 'Áreas de Atuação',
        content: `
            <section id="areas" class="py-5">
                <div class="container">
                    <h2 class="section-title">Áreas que atuamos</h2>
                    <div class="row">
                        <!-- Direito Civil -->
                        <div class="col-md-6 mb-4">
                            <div class="area-card">
                                <h3 class="area-title">Direito Civil</h3>
                                <p>Atuamos em ações de indenização, responsabilidade civil, contratos, obrigações, direito de família, sucessões e demais questões relacionadas ao direito civil.</p>
                            </div>
                        </div>
                        <!-- Direito Trabalhista -->
                        <div class="col-md-6 mb-4">
                            <div class="area-card">
                                <h3 class="area-title">Direito Trabalhista</h3>
                                <p>Defesa em ações trabalhistas, rescisão indireta, horas extras, assédio moral, acidente de trabalho e demais questões relacionadas ao direito do trabalho.</p>
                            </div>
                        </div>
                        <!-- Direito Empresarial -->
                        <div class="col-md-6 mb-4">
                            <div class="area-card">
                                <h3 class="area-title">Direito Empresarial</h3>
                                <p>Assessoria jurídica empresarial, contratos societários, recuperação judicial e extrajudicial, falência, propriedade intelectual e direito do consumidor.</p>
                            </div>
                        </div>
                        <!-- Direito de Família -->
                        <div class="col-md-6 mb-4">
                            <div class="area-card">
                                <h3 class="area-title">Direito de Família</h3>
                                <p>Divórcio, pensão alimentícia, guarda de filhos, investigação de paternidade, adoção, inventário, partilha de bens e demais questões familiares.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `
    },
    'feedbacks': {
        title: 'Feedbacks',
        content: `
            <section id="feedbacks" class="py-5">
                <div class="container">
                    <h2 class="section-title">O que dizem nossos clientes</h2>
                    <div class="row">
                        <!-- Feedback 1 -->
                        <div class="col-md-4 mb-4">
                            <div class="testimonial-card">
                                <div class="testimonial-rating">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                </div>
                                <p class="testimonial-text">"Excelente atendimento! O escritório foi muito profissional e atencioso em todos os momentos. Recomendo!"</p>
                                <p class="testimonial-author">- João Silva</p>
                            </div>
                        </div>
                        <!-- Feedback 2 -->
                        <div class="col-md-4 mb-4">
                            <div class="testimonial-card">
                                <div class="testimonial-rating">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="far fa-star"></i>
                                </div>
                                <p class="testimonial-text">"Conseguiram resolver meu caso trabalhista de forma rápida e eficiente. Muito obrigado pelo excelente trabalho!"</p>
                                <p class="testimonial-author">- Maria Santos</p>
                            </div>
                        </div>
                        <!-- Feedback 3 -->
                        <div class="col-md-4 mb-4">
                            <div class="testimonial-card">
                                <div class="testimonial-rating">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                </div>
                                <p class="testimonial-text">"Profissionais extremamente competentes e dedicados. Me auxiliaram em um processo de divórcio complicado com muita competência."</p>
                                <p class="testimonial-author">- Carlos Oliveira</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `
    },
    'contato': {
        title: 'Contato',
        content: `
            <section id="contato" class="py-5">
                <div class="container">
                    <h2 class="section-title">Entre em Contato</h2>
                    <div class="row justify-content-center">
                        <div class="col-lg-8">
                            <div class="contact-form">
                                <form id="form-contato">
                                    <div class="row">
                                        <div class="col-md-6 mb-3">
                                            <input type="text" class="form-control" id="nome" placeholder="Nome" required>
                                        </div>
                                        <div class="col-md-6 mb-3">
                                            <input type="tel" class="form-control" id="telefone" placeholder="Telefone" required>
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <input type="email" class="form-control" id="email" placeholder="E-mail" required>
                                    </div>
                                    <div class="mb-4">
                                        <textarea class="form-control" id="mensagem" rows="5" placeholder="Descreva seu problema" required></textarea>
                                    </div>
                                    <div class="text-end">
                                        <button type="submit" class="btn btn-gold">ENVIAR</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `
    }
};

// Função para carregar uma página específica
function loadPage(pageId) {
    const page = pages[pageId];
    if (!page) return;
    
    // Atualiza o título da página
    document.title = `${page.title} | SA Advogados`;
    
    // Atualiza o conteúdo principal
    const conteudo = document.getElementById('conteudo');
    conteudo.innerHTML = page.content;
    
    // Rola para o topo da página
    window.scrollTo(0, 0);
    
    // Adiciona a classe de animação
    const sections = conteudo.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.add('fade-in');
    });
    
    // Atualiza a navegação ativa
    updateActiveNav(pageId);
    
    // Configura o formulário de contato se for a página de contato
    if (pageId === 'contato') {
        setupContactForm();
    }
}

// Função para configurar a navegação
function setupNavigation() {
    // Adiciona evento de clique aos links de navegação
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Verifica se é um link para uma seção da mesma página
            if (href.startsWith('#')) {
                e.preventDefault();
                const pageId = href.substring(1);
                loadPage(pageId);
                
                // Fecha o menu mobile se estiver aberto
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse.classList.contains('show')) {
                    const bsCollapse = new bootstrap.Collapse(navbarCollapse, {toggle: false});
                    bsCollapse.hide();
                }
            }
            // Se for um link para outra página, deixa o navegador seguir o link normalmente
        });
    });
    
    // Adiciona evento de rolagem para destacar a seção ativa
    window.addEventListener('scroll', highlightActiveSection);
}

// Função para destacar a seção ativa na navegação
function highlightActiveSection() {
    const scrollPosition = window.scrollY + 100;
    
    // Verifica cada seção para ver qual está visível
    document.querySelectorAll('section[id]').forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            const sectionId = section.getAttribute('id');
            updateActiveNav(sectionId);
        }
    });
}

// Função para atualizar o link ativo na navegação
function updateActiveNav(activeId) {
    document.querySelectorAll('.nav-link').forEach(link => {
        const linkHref = link.getAttribute('href').substring(1);
        if (linkHref === activeId) {
            link.classList.add('active');
            link.setAttribute('aria-current', 'page');
        } else {
            link.classList.remove('active');
            link.removeAttribute('aria-current');
        }
    });
}

// Função para configurar o formulário de contato
function setupContactForm() {
    const form = document.getElementById('form-contato');
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Aqui você pode adicionar o código para enviar o formulário
        // Por enquanto, apenas exibimos um alerta
        alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
        form.reset();
    });
}

// Configura a máscara para o campo de telefone
function setupPhoneMask() {
    const phoneInput = document.getElementById('telefone');
    if (phoneInput) {
        phoneInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            
            if (value.length > 11) {
                value = value.substring(0, 11);
            }
            
            if (value.length > 10) {
                value = value.replace(/^(\d{2})(\d{5})(\d{4}).*/, '($1) $2-$3');
            } else if (value.length > 5) {
                value = value.replace(/^(\d{2})(\d{4})(\d{0,4}).*/, '($1) $2-$3');
            } else if (value.length > 2) {
                value = value.replace(/^(\d{2})(\d{0,5})/, '($1) $2');
            } else if (value.length > 0) {
                value = value.replace(/^(\d*)/, '($1');
            }
            
            e.target.value = value;
        });
    }
}

// Inicializa as máscaras quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', function() {
    setupPhoneMask();
});
