"use client";
import { LinkedinIcon, TwitterIcon, GithubIcon } from "lucide-react";
import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";
import { ImageWithFallback } from "./ImageWithFallback";
import { Button } from "../ui/button";

export function Team() {
  const team = [
    {
      name: "Ratih Nurfaida",
      role: "CEO & Founder",
      bio: "Visionary leader with 15+ years in tech strategy and business development.",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b832?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "Michael Chen",
      role: "CTO",
      bio: "Full-stack architect passionate about scalable systems and emerging technologies.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      linkedin: "#",
      github: "#",
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Design",
      bio: "Creative director who believes great design should be both beautiful and functional.",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1061&q=80",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "David Kim",
      role: "Lead Developer",
      bio: "Senior engineer with expertise in cloud infrastructure and DevOps practices.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      linkedin: "#",
      github: "#",
    },
  ];

  return (
    <section id="team" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Our Team
          </Badge>
          <h2 className="text-3xl md:text-4xl mb-4">
            Meet the Experts Behind TechCorp
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our diverse team of talented professionals brings together decades
            of experience in technology, design, and business strategy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-6 text-center">
                <div className="relative mb-4">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <h3 className="mb-1">{member.name}</h3>
                <p className="text-primary mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground mb-4">
                  {member.bio}
                </p>
                <div className="flex justify-center space-x-2">
                  {member.linkedin && (
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <LinkedinIcon className="h-4 w-4" />
                    </Button>
                  )}
                  {member.twitter && (
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <TwitterIcon className="h-4 w-4" />
                    </Button>
                  )}
                  {member.github && (
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <GithubIcon className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
