import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Свяжусь с вами в ближайшее время.",
    });
    setFormData({ name: '', contact: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-navy text-foreground">
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none opacity-10">
        <div className="absolute top-20 left-10 text-6xl">✨</div>
        <div className="absolute top-40 right-20 text-4xl">🌙</div>
        <div className="absolute bottom-40 left-1/4 text-5xl">⭐</div>
        <div className="absolute top-1/3 right-1/3 text-3xl">🪐</div>
        <div className="absolute bottom-20 right-10 text-4xl">✨</div>
      </div>

      <header className="container mx-auto px-4 py-8">
        <nav className="flex justify-center gap-8 text-sm uppercase tracking-widest">
          <a href="#about" className="hover:text-primary transition-colors">Обо мне</a>
          <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
          <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
          <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
        </nav>
      </header>

      <section className="container mx-auto px-4 py-20 text-center relative">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm uppercase tracking-[0.3em] mb-4 text-bronze">Астролог</p>
          <h1 className="text-7xl md:text-8xl font-light mb-6 text-primary">
            Марина<br />Новикова
          </h1>
          <div className="relative w-64 h-64 mx-auto my-12 rounded-full overflow-hidden border-4 border-primary">
            <img 
              src="https://cdn.poehali.dev/files/dced9d52-f536-4318-94b3-1bb08dd07141.png" 
              alt="Марина Новикова" 
              className="w-full h-full object-cover"
            />
          </div>
          <Button 
            size="lg" 
            className="rounded-full px-12 py-6 text-lg border-2 border-primary bg-transparent hover:bg-primary hover:text-background transition-all"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Записаться <Icon name="ArrowRight" className="ml-2" />
          </Button>
        </div>
      </section>

      <section id="services" className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto">
          <Button 
            variant="outline" 
            className="w-full mb-8 rounded-full py-6 text-xl border-2 border-primary bg-transparent hover:bg-primary/10"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Услуги <Icon name="ArrowRight" className="ml-2" />
          </Button>
        </div>
      </section>

      <section id="about" className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-6xl font-light text-center mb-16 text-primary">Обо мне</h2>
          
          <Card className="bg-card border-2 border-primary rounded-3xl mb-8">
            <CardContent className="p-8 md:p-12">
              <p className="text-lg mb-6">Я - Марина Новикова, профессиональный астролог.</p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-primary">•</span>
                  <span>Специализируюсь на эмоциях, чувствах человека; профориентации, сценариях, сложностях в отношениях, на теме иерархии и ответственности, социуме.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary">•</span>
                  <span>В своей практической работе использую психологические знания, аналитический и финансовый опыт, коучинг.</span>
                </li>
              </ul>

              <h3 className="text-2xl font-semibold mb-4">Проф.достижения:</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-primary">•</span>
                  <span>Обучалась у основателя высшей школы астрологии Павла Андреева, практикующего астролога Ирины Макашевой.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary">•</span>
                  <span>Пять лет практики в астрологии.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary">•</span>
                  <span>В свое обучение вложила полтора млн руб.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary">•</span>
                  <span>Мой рекорд - пятьдесят часов проведенных консультаций за один месяц.</span>
                </li>
              </ul>

              <div className="relative">
                <div className="absolute right-0 top-0 text-primary opacity-30">
                  <Icon name="Sparkles" size={120} />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Миссия:</h3>
                <p className="text-lg">Хочу с помощью астрологии помочь людям в реализации себя</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-light text-center mb-16 text-primary">
            Запросы, с которыми<br />я работаю
          </h2>
          
          <div className="space-y-4">
            {[
              'Если хотите карьерного роста',
              'Узнать про свою самореализацию',
              'Узнать свое предназначение и как воплотить его в жизнь',
              'Узнать сильные/слабые стороны и таланты',
              'Увеличения дохода на любимом деле, даже на творчестве',
              'Помощь в решении сложных вопросов в отношениях',
              'Узнать какие качества необходимы для увеличения дохода'
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-4 text-lg">
                <span className="text-primary text-2xl">+</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-light text-center mb-16 text-primary">Мои услуги</h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border-2 border-primary rounded-3xl overflow-hidden bg-card">
              <AccordionTrigger className="px-8 py-6 text-xl hover:no-underline hover:bg-primary/10">
                <span className="text-primary uppercase tracking-wider">Бесплатная консультация</span>
                <Icon name="ChevronDown" className="ml-2" />
              </AccordionTrigger>
              <AccordionContent className="px-8 pb-8">
                <p className="mb-4">Идеальный старт для нашего диалога с картой.</p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-primary">•</span>
                    <span>Вы озвучиваете свой главный вопрос – что именно хотите изучить в натальной карте.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary">•</span>
                    <span>Моя задача – за 15-20 минут дать вам первичные инсайты и наметить план, как мы можем проработать эти темы глубже.</span>
                  </li>
                </ul>
                <div className="flex items-center justify-center gap-4 my-6">
                  <div className="h-px bg-primary/30 flex-1"></div>
                  <div className="flex items-center gap-2 text-bronze">
                    <Icon name="Clock" size={20} />
                    <span>15-20 минут</span>
                  </div>
                  <div className="h-px bg-primary/30 flex-1"></div>
                </div>
                <p className="text-sm text-muted-foreground mb-4">Онлайн формат</p>
                <Button 
                  className="w-full rounded-full py-6 bg-transparent border-2 border-primary hover:bg-primary hover:text-background"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Записаться <Icon name="ArrowRight" className="ml-2" />
                </Button>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border-2 border-primary rounded-3xl overflow-hidden bg-card">
              <AccordionTrigger className="px-8 py-6 text-xl hover:no-underline hover:bg-primary/10">
                <span className="text-primary uppercase tracking-wider">Индивидуальная консультация</span>
                <Icon name="ChevronDown" className="ml-2" />
              </AccordionTrigger>
              <AccordionContent className="px-8 pb-8">
                <p className="mb-4">Глубокая проработка вашего запроса с детальным разбором натальной карты.</p>
                <div className="flex items-center justify-center gap-4 my-6">
                  <div className="h-px bg-primary/30 flex-1"></div>
                  <div className="flex items-center gap-2 text-bronze">
                    <Icon name="Clock" size={20} />
                    <span>60-90 минут</span>
                  </div>
                  <div className="h-px bg-primary/30 flex-1"></div>
                </div>
                <Button 
                  className="w-full rounded-full py-6 bg-transparent border-2 border-primary hover:bg-primary hover:text-background"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Записаться <Icon name="ArrowRight" className="ml-2" />
                </Button>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border-2 border-primary rounded-3xl overflow-hidden bg-card">
              <AccordionTrigger className="px-8 py-6 text-xl hover:no-underline hover:bg-primary/10">
                <span className="text-primary uppercase tracking-wider">Пакет "Прорыв" 5 сессий</span>
                <Icon name="ChevronDown" className="ml-2" />
              </AccordionTrigger>
              <AccordionContent className="px-8 pb-8">
                <p className="mb-4">Комплексная программа для глубокой трансформации и достижения целей.</p>
                <div className="flex items-center justify-center gap-4 my-6">
                  <div className="h-px bg-primary/30 flex-1"></div>
                  <div className="flex items-center gap-2 text-bronze">
                    <Icon name="Calendar" size={20} />
                    <span>5 сессий</span>
                  </div>
                  <div className="h-px bg-primary/30 flex-1"></div>
                </div>
                <Button 
                  className="w-full rounded-full py-6 bg-transparent border-2 border-primary hover:bg-primary hover:text-background"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Записаться <Icon name="ArrowRight" className="ml-2" />
                </Button>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border-2 border-primary rounded-3xl overflow-hidden bg-card">
              <AccordionTrigger className="px-8 py-6 text-xl hover:no-underline hover:bg-primary/10">
                <span className="text-primary uppercase tracking-wider">Онлайн-курсы</span>
                <Icon name="ChevronDown" className="ml-2" />
              </AccordionTrigger>
              <AccordionContent className="px-8 pb-8">
                <p className="mb-4">Обучающие программы по астрологии для самостоятельного изучения.</p>
                <Button 
                  className="w-full rounded-full py-6 bg-transparent border-2 border-primary hover:bg-primary hover:text-background"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Узнать подробнее <Icon name="ArrowRight" className="ml-2" />
                </Button>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section id="faq" className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-light text-center mb-16 text-primary">
            Часто задаваемые<br />вопросы
          </h2>
          
          <Card className="bg-card border-2 border-primary rounded-3xl">
            <CardContent className="p-8 md:p-12">
              <div className="flex justify-center mb-8">
                <Icon name="Sun" size={64} className="text-primary" />
              </div>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-3">1. Как подготовиться к разбору карты?</h3>
                  <p className="text-muted-foreground">Достаточно знать точную дату, место и время рождения. Подумай, с каким вопросом хочешь прийти – про отношения, учебу, выбор пути.</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">2. Что вообще можно узнать по своей карте?</h3>
                  <p className="text-muted-foreground">Карта помогает разобраться в самых важных вопросах: почему одни предметы даются легко, а другие нет; как строить отношения с разными людьми; какие профессии могут подойти; почему в некоторые периоды все валится из рук.</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">3. А если в карте что-то плохое?</h3>
                  <p className="text-muted-foreground">В астрологии нет понятия "плохая карта". Есть сложные аспекты, которые показывают зоны роста – те жизненные уроки, которые помогут тебе стать сильнее.</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">4. Может ли астрология помочь с финансовыми проблемами?</h3>
                  <p className="text-muted-foreground">Да, может показать твои природные способности к заработку и слабые места в обращении с деньгами.</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">5. Как астрология связана с самооценкой?</h3>
                  <p className="text-muted-foreground">Положения планет в карте часто показывают, откуда берутся наши сомнения в себе. Например, если в определенном секторе карты есть сложные аспекты, человек может чувствовать недостаток любви к себе.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contact" className="container mx-auto px-4 py-20">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-light text-center mb-16 text-primary">Контакты</h2>
          
          <Card className="bg-card border-2 border-primary rounded-3xl">
            <CardHeader>
              <CardTitle className="text-3xl text-center">Записаться на консультацию</CardTitle>
              <CardDescription className="text-center text-muted-foreground">
                Заполните форму, и я свяжусь с вами в ближайшее время
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input 
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-input border-primary/50 rounded-2xl py-6"
                  />
                </div>
                <div>
                  <Input 
                    placeholder="Telegram или WhatsApp"
                    value={formData.contact}
                    onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                    required
                    className="bg-input border-primary/50 rounded-2xl py-6"
                  />
                </div>
                <div>
                  <Textarea 
                    placeholder="Расскажите о вашем запросе"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="bg-input border-primary/50 rounded-2xl min-h-32"
                  />
                </div>
                <Button 
                  type="submit"
                  className="w-full rounded-full py-6 text-lg bg-primary text-background hover:bg-primary/90"
                >
                  Отправить заявку <Icon name="Send" className="ml-2" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="container mx-auto px-4 py-12 text-center border-t border-primary/20">
        <p className="text-sm text-muted-foreground">© 2024 Марина Новикова. Астролог</p>
      </footer>
    </div>
  );
};

export default Index;
