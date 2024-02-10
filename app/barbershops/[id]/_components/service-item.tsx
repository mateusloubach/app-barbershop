"use client"; 
import { Button } from "@/app/_components/ui/button";
import { Card, CardContent } from "@/app/_components/ui/card";
import { Service } from "@prisma/client";
import { signIn } from "next-auth/react";
import Image from "next/image";


interface ServiceItemProps {
    service: Service;
    isAuthenticated?: boolean;
}

const ServiceItem = ({service, isAuthenticated}: ServiceItemProps) => {

    const handleBookingClick = () => {
        if (!isAuthenticated ) {
            signIn('google')
        }

        //TODO Open schedule modal;
    }


    return ( 
        <Card>
            <CardContent className="p-3 w-full">
                <div className="flex gap-4 items-center">
                    <div className="relative min-h-[110px] max-h-[110px] min-w-[110px] max-w-[110px]">
                        <Image
                            className="rounded-lg"
                            src={service.imageUrl} alt={service.name}
                            fill
                            style={{ objectFit: 'contain' }}
                        />
                    </div>
                    <div className="flex flex-col w-full">
                        <h3 className="text-lg font-bold">{service.name}</h3>
                        <p className="text-sm text-gray-400">{service.description}</p>
                        
                        <div className="flex items-center justify-between mt-3">
                            <p className="text-lg font-bold text-primary">
                                {Intl.NumberFormat('pt-BR', { 
                                    style: 'currency', currency: 'BRL' 
                                }).format(Number(service.price))}
                            </p>
                            <Button variant="secondary" onClick={handleBookingClick}>Reservar</Button>
                        </div>
                    </div>
                </div>   
            </CardContent>
        </Card>
    );
}
 

interface ServiceItemProps {
    service: Service
}export 

default ServiceItem;