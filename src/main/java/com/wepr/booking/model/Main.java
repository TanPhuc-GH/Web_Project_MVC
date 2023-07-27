package com.wepr.booking.model;


import com.wepr.booking.model.embedded.TourCatalogId;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Persistence;
public class Main {
    public static  void main(String[] args){
//        EntityManagerFactory emf = Persistence.createEntityManagerFactory("bookingwebsite_db");
//        EntityManager em = emf.createEntityManager();
        EntityManager em = Persistence.createEntityManagerFactory("bookingwebsite_db").createEntityManager();
        EntityTransaction transaction = em.getTransaction();
        transaction.begin();

        //User
        User user = new User("truongtanphuc","truongtanphuc2002@gmail.com","123456",
                "","0936278947", "Phúc", "Trương Tấn", true,"Hồ Chí Minh");
        em.persist(user);

        Catalog catalog = new Catalog();
        em.persist(catalog);

        Place place = new Place();
        em.persist(place);

        Tour tour  = new Tour();
        em.persist(tour);

        Tour_Image tour_image = new Tour_Image();
        em.persist(tour_image);

        Payment payment = new Payment();
        em.persist(payment);

        /**/
        TourCatalogId tourCatalogId = new TourCatalogId();
        tourCatalogId.setTourID(tour.getTourID());
        tourCatalogId.setCatalogID(catalog.getCatalogID());

        Tour_Catalog tour_catalog = new Tour_Catalog();
        tour_catalog.setId(tourCatalogId);
        tour_catalog.setTour(tour);
        tour_catalog.setCatalog(catalog);
        em.persist(tour_catalog);

        User_Tour_Comment user_tour_comment = new User_Tour_Comment();
        em.persist(user_tour_comment);

        User_Tour_Favorite user_tour_favorite = new User_Tour_Favorite();
        em.persist(user_tour_favorite);

        User_Tour_Book userTourBook = new User_Tour_Book();
        em.persist(userTourBook);

        transaction.commit();

        em.close();
//        emf.close();
    }
}
