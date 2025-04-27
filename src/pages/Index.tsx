import { ChartLine, Users } from "lucide-react";
import WhatsAppButton from "@/components/WhatsAppButton";
import ClientType from "@/components/ClientType";
import { Button } from "@/components/ui/button";

const Index = () => {
  const handleContactClick = () => {
    window.open("https://wa.me/5579988774996?text=Olá! Vim pelo seu site e gostaria de saber mais sobre a economia na conta de energia.", "_blank");
  };

  const handleEvaluationClick = () => {
    window.open("https://lex.energiacom.vc/0H21ZI7", "_blank");
  };

  return (
    <div className="min-h-screen">
      <WhatsAppButton />
      
      {/* Hero Section */}
      <section className="gradient-bg py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Reduza sua conta de energia com energia renovável
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-700">
            Economize até 40% na sua conta de energia sem pagar nada por isso
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button
              onClick={handleEvaluationClick}
              className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-full"
            >
              Fazer Avaliação de desconto
            </Button>
            <Button
              onClick={handleContactClick}
              className="bg-secondary hover:bg-secondary/90 text-white px-8 py-6 text-lg rounded-full"
            >
              Descubra quanto você pode economizar
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Para Todos os Tipos de Consumidores</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
            <ClientType type="residencia" title="Residências" />
            <ClientType type="empresa" title="Empresas de todo porte" />
            <ClientType type="autonomo" title="Autônomos" />
            <ClientType type="escola" title="Escolas" />
            <ClientType type="restaurante" title="Restaurantes" />
            <ClientType type="fabrica" title="Fábricas" />
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Nossa Parceria</h2>
          <p className="text-xl mb-6">
            Somos parceiros da Alexandria Energia Renovável, atendendo todo o Brasil com excelência.
            Entre nossos clientes, temos o prazer de atender gigantes do mercado como a Cacau Show.
          </p>
        </div>
      </section>

      {/* ANEEL Law Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Respaldo Legal</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-lg mb-4">
              De acordo com a Lei 14.300 de 2022 da ANEEL (Agência Nacional de Energia Elétrica),
              o consumidor tem o direito de escolher seu fornecedor de energia elétrica, possibilitando
              a migração para o mercado livre de energia e garantindo economia significativa na conta
              de energia.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Por que escolher nossa consultoria?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <ChartLine className="h-8 w-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Avaliação Gratuita</h3>
                <p className="text-gray-600">Análise completa do seu consumo e potencial de economia, sem nenhum custo.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Users className="h-8 w-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Suporte Personalizado</h3>
                <p className="text-gray-600">Acompanhamento individual do seu processo de portabilidade.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 gradient-bg">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Comece a economizar hoje mesmo</h2>
          <p className="text-xl mb-8">
            Sem custos de adesão, sem burocracia. Apenas economia real na sua conta de energia.
          </p>
          <Button
            onClick={handleContactClick}
            className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-full"
          >
            Fale com um consultor agora
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
