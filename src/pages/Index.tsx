import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200/50 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Brain" size={32} className="text-indigo-600" />
              <h1 className="text-xl font-semibold text-gray-800">
                Путь к себе
              </h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#"
                className="text-gray-600 hover:text-indigo-600 transition-colors"
              >
                Главная
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-indigo-600 transition-colors"
              >
                Умный помощник
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-indigo-600 transition-colors"
              >
                Инсайты
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-indigo-600 transition-colors"
              >
                Сообщество
              </a>
            </nav>
            <Button className="bg-indigo-600 hover:bg-indigo-700">
              <Icon name="User" size={18} className="mr-2" />
              Войти
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-5xl font-bold text-gray-800 mb-6">
              Путешествие к лучшей версии{" "}
              <span className="text-indigo-600">себя</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Персональные рекомендации для развития на основе анализа ваших
              привычек, целей и внутренних потребностей
            </p>
            <div className="flex space-x-4">
              <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700">
                <Icon name="Sparkles" size={20} className="mr-2" />
                Начать путешествие
              </Button>
              <Button size="lg" variant="outline">
                <Icon name="Play" size={20} className="mr-2" />
                Посмотреть видео
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src="/img/582afd58-f650-4658-9ad6-cba3f616ae6c.jpg"
              alt="Медитация и самопознание"
              className="rounded-2xl shadow-2xl max-w-md w-full"
            />
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          <Card className="bg-white/70 backdrop-blur-sm border-gray-200/50 hover:shadow-lg transition-all">
            <CardHeader className="text-center">
              <Icon
                name="MessageCircle"
                size={48}
                className="text-indigo-600 mx-auto mb-4"
              />
              <CardTitle className="text-lg">Умный помощник</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-center">
                ИИ-коуч для персональных рекомендаций и поддержки
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/70 backdrop-blur-sm border-gray-200/50 hover:shadow-lg transition-all">
            <CardHeader className="text-center">
              <Icon
                name="Lightbulb"
                size={48}
                className="text-indigo-600 mx-auto mb-4"
              />
              <CardTitle className="text-lg">Инсайты</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-center">
                Глубокий анализ вашего прогресса и паттернов поведения
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/70 backdrop-blur-sm border-gray-200/50 hover:shadow-lg transition-all">
            <CardHeader className="text-center">
              <Icon
                name="Users"
                size={48}
                className="text-indigo-600 mx-auto mb-4"
              />
              <CardTitle className="text-lg">Сообщество</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-center">
                Единомышленники на пути саморазвития
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/70 backdrop-blur-sm border-gray-200/50 hover:shadow-lg transition-all">
            <CardHeader className="text-center">
              <Icon
                name="TrendingUp"
                size={48}
                className="text-indigo-600 mx-auto mb-4"
              />
              <CardTitle className="text-lg">Прогресс</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-center">
                Визуализация вашего развития и достижений
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Progress Section */}
        <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-12 border border-gray-200/50 mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-6">
                Ваш прогресс
              </h3>
              <p className="text-gray-600 mb-8">
                Отслеживайте свое развитие в ключевых областях жизни. Наш ИИ
                анализирует ваши данные и предлагает персональные рекомендации.
              </p>

              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">
                      Эмоциональный интеллект
                    </span>
                    <span className="text-sm text-gray-500">85%</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">
                      Осознанность
                    </span>
                    <span className="text-sm text-gray-500">72%</span>
                  </div>
                  <Progress value={72} className="h-2" />
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">
                      Целеполагание
                    </span>
                    <span className="text-sm text-gray-500">91%</span>
                  </div>
                  <Progress value={91} className="h-2" />
                </div>
              </div>
            </div>

            <div className="backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 bg-transparent">
              <h4 className="text-xl font-semibold text-gray-800 mb-6">
                Сегодняшние рекомендации
              </h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2"></div>
                  <p className="text-gray-700">
                    Практикуйте медитацию 10 минут утром для улучшения
                    концентрации
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2"></div>
                  <p className="text-gray-700">
                    Запишите 3 вещи, за которые вы благодарны сегодня
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2"></div>
                  <p className="text-gray-700">
                    Прочитайте статью о развитии эмпатии
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Insights Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-800 text-center mb-12">
            Последние инсайты
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-white/70 backdrop-blur-sm border-gray-200/50">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon
                    name="Target"
                    size={20}
                    className="text-indigo-600 mr-2"
                  />
                  Цели и мотивация
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Ваши цели стали более конкретными на 40% за последний месяц
                </p>
                <Button variant="outline" size="sm">
                  Подробнее
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white/70 backdrop-blur-sm border-gray-200/50">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon
                    name="Heart"
                    size={20}
                    className="text-indigo-600 mr-2"
                  />
                  Эмоции
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Уровень стресса снизился благодаря новым практикам
                </p>
                <Button variant="outline" size="sm">
                  Подробнее
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white/70 backdrop-blur-sm border-gray-200/50">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon
                    name="Clock"
                    size={20}
                    className="text-indigo-600 mr-2"
                  />
                  Привычки
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Сформирована устойчивая привычка утренней рефлексии
                </p>
                <Button variant="outline" size="sm">
                  Подробнее
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-white/50 backdrop-blur-sm rounded-2xl p-12 border border-gray-200/50">
          <h3 className="text-3xl font-bold text-gray-800 mb-6">
            Готовы начать путь к лучшей версии себя?
          </h3>
          <p className="text-xl text-gray-600 mb-8">
            Присоединяйтесь к тысячам людей, которые уже трансформируют свою
            жизнь
          </p>
          <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700">
            <Icon name="ArrowRight" size={20} className="mr-2" />
            Начать бесплатно
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white/80 backdrop-blur-sm border-t border-gray-200/50">
        <div className="container mx-auto px-6 py-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Brain" size={24} className="text-indigo-600" />
                <span className="font-semibold text-gray-800">Путь к себе</span>
              </div>
              <p className="text-gray-600 text-sm">
                ИИ-платформа для персонального развития и самопознания
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Продукт</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a
                    href="#"
                    className="hover:text-indigo-600 transition-colors"
                  >
                    Умный помощник
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-indigo-600 transition-colors"
                  >
                    Инсайты
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-indigo-600 transition-colors"
                  >
                    Сообщество
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Поддержка</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a
                    href="#"
                    className="hover:text-indigo-600 transition-colors"
                  >
                    Помощь
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-indigo-600 transition-colors"
                  >
                    Контакты
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-indigo-600 transition-colors"
                  >
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">
                Социальные сети
              </h4>
              <div className="flex space-x-4">
                <Icon
                  name="Twitter"
                  size={20}
                  className="text-gray-600 hover:text-indigo-600 cursor-pointer transition-colors"
                />
                <Icon
                  name="Facebook"
                  size={20}
                  className="text-gray-600 hover:text-indigo-600 cursor-pointer transition-colors"
                />
                <Icon
                  name="Instagram"
                  size={20}
                  className="text-gray-600 hover:text-indigo-600 cursor-pointer transition-colors"
                />
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-8 pt-8 text-center">
            <p className="text-gray-600 text-sm">
              © 2024 Путь к себе. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
