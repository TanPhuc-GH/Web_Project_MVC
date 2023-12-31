package com.wepr.booking.model;
import javax.persistence.*;
@Entity
@Table(name = "user_tour_favorite")
public class User_Tour_Favorite {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer userTourFavoriteID;
    @ManyToOne
    @JoinColumn(name = "userID")
    private User User;
    @ManyToOne
    @JoinColumn(name = "tourID")
    private Tour Tour;
    public Integer getUserTourFavoriteID(){ return userTourFavoriteID; }
    public void  setUserTourFavoriteID(Integer userTourFavoriteID){ this.userTourFavoriteID = userTourFavoriteID; }
    public User getUser(){ return User; }
    public void setUser(User user){ this.User = user; }

    public Tour getTour() {
        return Tour;
    }

    public void setTour(Tour tour) {
        this.Tour = tour;
    }
}
