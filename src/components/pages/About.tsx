import { Target, Users, Lightbulb, Award } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";

export function About() {
  const values = [
    {
      icon: Target,
      title: "Mission Driven",
      description:
        "We're committed to delivering exceptional results that exceed expectations and drive real business value.",
    },
    {
      icon: Users,
      title: "Client Focused",
      description:
        "Your success is our priority. We build lasting partnerships through trust, transparency, and dedication.",
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description:
        "We embrace cutting-edge technologies and creative solutions to solve complex business challenges.",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "Quality is never an accident. We maintain the highest standards in everything we do.",
    },
  ];

  return (
    <section id="about" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Tentang UndanginId
          </Badge>
          <h2 className="text-3xl md:text-4xl mb-4">
            Setiap Momen, Kami Desain dengan Sepenuh Hati
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Menjadi platform undangan digital terdepan yang menghadirkan kemudahan, keindahan, dan pengalaman berkesan dalam setiap momen spesial.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {values.map((value, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-shadow"
            >
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-secondary/30 rounded-2xl p-8 text-center">
          <h3 className="text-2xl mb-4">Our Story</h3>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Founded in 2014 by a team of visionary engineers and business
            strategists, TechCorp has grown from a small startup to a trusted
            partner for companies worldwide. We believe that technology should
            empower people and businesses to achieve their full potential.
          </p>
        </div>
      </div>
    </section>
  );
}
