package com.wepr.booking.JpaConfig;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

public class JpaConfig {
    private static final EntityManagerFactory emf = Persistence.createEntityManagerFactory("bookingwebsite_db");
    public static  EntityManagerFactory getEntityManagerFactory(){
        return  emf;
    }
}
